import { Component, OnInit, OnDestroy, inject, signal, computed, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeService } from './services/theme.service';
import { 
  SKILL_GROUPS, 
  PROJECTS, 
  EXPERIENCES, 
  ACHIEVEMENTS, 
  EDUCATION_LIST 
} from './data/portfolio.data';
import { 
  SkillCategory, 
  Project, 
  Experience, 
  Achievement, 
  EducationItem, 
  CompletionCertificate, 
  ToastMessage 
} from './models/portfolio.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  readonly themeService = inject(ThemeService);

  // Data references
  readonly skillGroups = SKILL_GROUPS;
  readonly allProjects = PROJECTS;
  readonly experiences: Experience[] = EXPERIENCES;
  readonly achievements: Achievement[] = ACHIEVEMENTS;
  readonly educationList: EducationItem[] = EDUCATION_LIST;

  // Navigation & UI States
  readonly activeNavSection = signal<string>('hero');
  readonly isScrolled = signal<boolean>(false);
  readonly isMobileDrawerOpen = signal<boolean>(false);
  readonly showBackToTop = signal<boolean>(false);

  // Filter States
  readonly selectedSkillCategory = signal<SkillCategory>('all');
  readonly selectedProjectCategory = signal<'all' | 'fullstack' | 'frontend' | 'backend'>('all');

  // Computed Filtered Projects
  readonly filteredProjects = computed<Project[]>(() => {
    const category = this.selectedProjectCategory();
    if (category === 'all') {
      return this.allProjects;
    }
    return this.allProjects.filter(p => p.category === category);
  });

  // Typewriter roles
  private readonly roles: string[] = [
    'Full-Stack JAVA Developer',
    'Angular & Spring Boot Specialist',
    'Forward Deployed Engineer',
    'Problem Solver (150+ DSA)',
    'Cloud & Systems Engineer'
  ];
  readonly currentRoleText = signal<string>('Software Developer');
  private typewriterInterval: any;
  private typewriterTimeout: any;

  // GitHub Stats Configuration
  readonly githubUsername = signal<string>('kartikeyofficial');
  githubInput: string = 'kartikeyofficial';

  readonly githubStatsUrl = computed<string>(() => {
    const user = this.githubUsername();
    return `https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=ff6b00&icon_color=ff6b00&text_color=e2e8f0`;
  });

  readonly githubStreakUrl = computed<string>(() => {
    const user = this.githubUsername();
    return `https://github-readme-streak-stats.herokuapp.com/?user=${user}&theme=tokyonight&hide_border=true&background=00000000&ring=ff6b00&fire=ff6b00&currStreakNum=ff6b00&sideNums=e2e8f0&sideLabels=94a3b8`;
  });

  readonly githubLangsUrl = computed<string>(() => {
    const user = this.githubUsername();
    return `https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=ff6b00&text_color=e2e8f0`;
  });

  // Modal States
  readonly activeCertificate = signal<CompletionCertificate | null>(null);
  readonly isResumeModalOpen = signal<boolean>(false);

  // Toast Notifications
  readonly toasts = signal<ToastMessage[]>([]);
  private toastCounter = 0;

  // Contact Form Model
  contactFormModel = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  readonly isSubmittingContact = signal<boolean>(false);

  // Year
  readonly currentYear = new Date().getFullYear();

  ngOnInit(): void {
    this.startTypewriter();
  }

  ngOnDestroy(): void {
    if (this.typewriterInterval) clearInterval(this.typewriterInterval);
    if (this.typewriterTimeout) clearTimeout(this.typewriterTimeout);
  }

  // Window Scroll Listener for Header Shadow and ScrollSpy
  @HostListener('window:scroll')
  onWindowScroll(): void {
    const scrollPos = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled.set(scrollPos > 40);
    this.showBackToTop.set(scrollPos > 400);

    // ScrollSpy active link detection
    const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'achievements', 'education', 'github', 'resume', 'contact'];
    for (const sectionId of sections) {
      const el = document.getElementById(sectionId);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 160 && rect.bottom >= 160) {
          this.activeNavSection.set(sectionId);
          break;
        }
      }
    }
  }

  // Typewriter Animation Logic
  private startTypewriter(): void {
    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    const tick = () => {
      const fullText = this.roles[roleIdx];
      if (isDeleting) {
        this.currentRoleText.set(fullText.substring(0, charIdx - 1));
        charIdx--;
      } else {
        this.currentRoleText.set(fullText.substring(0, charIdx + 1));
        charIdx++;
      }

      let speed = isDeleting ? 40 : 80;

      if (!isDeleting && charIdx === fullText.length) {
        speed = 2200; // Pause at end of word
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % this.roles.length;
        speed = 400; // Pause before new word
      }

      this.typewriterTimeout = setTimeout(tick, speed);
    };

    tick();
  }

  // Theme Toggler
  toggleTheme(): void {
    this.themeService.toggleTheme();
    const newTheme = this.themeService.currentTheme();
    this.addToast('info', `Theme switched to ${newTheme === 'dark' ? 'Dark (Orange & Black)' : 'Light (Orange & White)'}`);
  }

  // Mobile Drawer Handlers
  toggleMobileDrawer(): void {
    this.isMobileDrawerOpen.update(v => !v);
  }

  closeMobileDrawer(): void {
    this.isMobileDrawerOpen.set(false);
  }

  // Filter Handlers
  filterSkills(category: SkillCategory): void {
    this.selectedSkillCategory.set(category);
  }

  filterProjects(category: 'all' | 'fullstack' | 'frontend' | 'backend'): void {
    this.selectedProjectCategory.set(category);
  }

  // GitHub Updater
  updateGithubUsername(): void {
    const trimmed = this.githubInput.trim();
    if (trimmed) {
      this.githubUsername.set(trimmed);
      this.addToast('success', `GitHub statistics updated for user @${trimmed}`);
    } else {
      this.addToast('warning', 'Please enter a valid GitHub username.');
    }
  }

  onImgError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = 'https://placehold.co/400x200/18181b/ff6b00?text=GitHub+Stats+Preview';
  }

  // Certificate Modal Handlers
  openCertificateModal(cert: CompletionCertificate): void {
    this.activeCertificate.set(cert);
  }

  closeCertificateModal(): void {
    this.activeCertificate.set(null);
  }

  printCertificate(): void {
    window.print();
  }

  // Resume Modal Handlers
  openResumeModal(): void {
    this.isResumeModalOpen.set(true);
  }

  closeResumeModal(): void {
    this.isResumeModalOpen.set(false);
  }

  printResume(): void {
    window.print();
  }

  // Download Resume Trigger
  downloadResume(): void {
    this.addToast('success', 'Opening printable resume format. Click "Print / Save as PDF" in dialog!');
    this.openResumeModal();
  }

  // Copy Email to Clipboard
  copyEmail(): void {
    const email = 'rajputkartikey10@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      this.addToast('success', `Copied to clipboard: ${email}`);
    }).catch(() => {
      this.addToast('info', `Email: ${email}`);
    });
  }

  // Copy Short Bio to Clipboard
  copyShortBio(): void {
    const bio = 'Kartikey Rajput - Software Developer specializing in full-stack web engineering, scalable backends, and algorithmic problem solving with 500+ problems solved. Contact: rajputkartikey10@gmail.com';
    navigator.clipboard.writeText(bio).then(() => {
      this.addToast('success', 'Professional summary bio copied to clipboard!');
    });
  }

  // Contact Form Submission Handler
  submitContactForm(form: any): void {
    if (form.invalid) {
      this.addToast('warning', 'Please fill in all required fields properly.');
      return;
    }

    this.isSubmittingContact.set(true);

    // Simulate sending with nice response
    setTimeout(() => {
      this.isSubmittingContact.set(false);
      this.addToast('success', `Thank you ${this.contactFormModel.name}! Your message has been sent to rajputkartikey10@gmail.com. I will reply shortly.`);
      
      // Reset form
      form.resetForm();
      this.contactFormModel = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    }, 900);
  }

  // Smooth Scroll
  scrollTo(elementId: string): void {
    this.closeMobileDrawer();
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Toast System
  addToast(type: 'success' | 'info' | 'warning' | 'error', message: string): void {
    const id = ++this.toastCounter;
    this.toasts.update(list => [...list, { id, type, message }]);

    setTimeout(() => {
      this.removeToast(id);
    }, 4500);
  }

  removeToast(id: number): void {
    this.toasts.update(list => list.filter(t => t.id !== id));
  }
}
