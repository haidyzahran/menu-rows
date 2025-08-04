import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, NgClass, NgFor, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  
  
  ngAfterViewInit(): void {
    const cards = document.querySelectorAll('.card-rtl, .card-up, .card-zoom-in'); 
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('visible');
          observer.unobserve(entry.target); 
        }
      });
    }, {
      threshold: 0.2
    });
  
    cards.forEach(card => observer.observe(card));
  }


    
  images: string[] = [
    'assets/images/food1.jpeg',
    'assets/images/food2.jpeg',
    'assets/images/food3.jpeg',
    'assets/images/food4.jpeg',
    'assets/images/food5.jpeg',
    'assets/images/food6.jpeg',
    'assets/images/food6.jpeg',
    'assets/images/food7.jpeg'
  ];


  currentIndex = 0;

  getVisibleSlides(): string[] {
    const screenWidth = window.innerWidth;
    const slidesPerView = screenWidth >= 1024 ? 3 : screenWidth >= 768 ? 2 : 1;

    const result: string[] = [];
    for (let i = 0; i < slidesPerView; i++) {
      const index = (this.currentIndex + i) % this.images.length;
      result.push(this.images[index]);
    }
    return result;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  // 
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // 




  menu = [
  {
    title: 'ركن المشاوي',
    items: [
      { name: 'كباب بتلو', price: { "ربع": 210, "نص": 400, "كيلو": 800 }, description: ""},
      { name: 'كباب بتلو', price: { "ربع": 210, "نص": 400, "كيلو": 800 }, description: " + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'كباب بتلو', price: { "ربع": 210, "نص": 400, "كيلو": 800 }, description: ""},
      { name: 'كباب بتلو', price: { "ربع": 210, "نص": 400, "كيلو": 800 }, description: ""},
      { name: 'كباب بتلو', price: { "ربع": 210, "نص": 400, "كيلو": 800 }, description: " + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'كباب بتلو', price: { "ربع": 210, "نص": 400, "كيلو": 800 }, description: ""}
      
    ],
    note: 'يقدم مع المشاوي عيش وسلطات',
  },
  {
    title: 'ركن الفراخ والحمام',
    items: [
      { name: 'فرخة تكا', price: { "ربع": 210, "نص": 400, "فرخة": 800 }, description: ""},
      { name: 'فرخة قطع', price: { "ربع": 210, "نص": 400, "فرخة": 800 }, description: ""},
      { name: 'حمام ارز', price: { "فرخة": 210 }, description: ""},
      { name: 'حمام فريك', price: { "فرخة": 210 }, description: ""}
    ],
    note: '',
  },
  {
    title: 'ركن الوجبات',
    items: [
      { name: 'وجبة فاتنوم', price: { "": 210 }, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'وجبة قناص', price: { "": 210 }, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'وجبة الصاعقة', price: { "": 210 }, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'وجبة فاتنوم', price: { "": 210 }, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'وجبة قناص', price: { "": 210 }, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'وجبة الصاعقة', price: { "": 210 }, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'وجبة فاتنوم', price: { "": 210 }, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'وجبة قناص', price: { "": 210 }, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'وجبة الصاعقة', price: { "": 210 }, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"}
    ],
    note: 'عند طلب صدر فراخ ( 15 جنيه ) فرق سعر حسب المتاح',
  },
  {
    title: 'ركن الشاورما',
    items: [
      { name: 'كباب بتلو', price: { "": 210 }, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'كباب بتلو', price: { "": 210 }, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'كباب بتلو', price: { "": 210 }, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'كباب بتلو', price: { "": 210 }, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'كباب بتلو', price: { "": 210 }, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"}
    ],
    note: '',
  },
  {
    title: 'الصواني',
    items: [
      { name: 'كباب بتلو', price: { "ربع": 210, "نص": 400, "كيلو": 800 }, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'كباب بتلو', price: { "ربع": 210, "نص": 400, "كيلو": 800 }, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'كباب بتلو', price: { "ربع": 210, "نص": 400, "كيلو": 800 }, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"}
    ],
    note: '',
  },
  {
    title: 'الشورب',
    items: [
      { name: 'كباب بتلو', price: { "ربع": 210, "نص": 400, "كيلو": 800 }, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'كباب بتلو', price: { "ربع": 210, "نص": 400, "كيلو": 800 }, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'كباب بتلو', price: { "ربع": 210, "نص": 400, "كيلو": 800 }, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"}
    ],
    note: '',
  },
  {
    title: 'المقبلات',
    items: [
      { name: 'طبق سمبوسة لحمة 5 قطع', price: { "": 60 }, description: ""},
      { name: 'طبق سمبوسة لحمة 5 قطع', price: { "": 60 }, description: ""},
      { name: 'طبق سمبوسة لحمة 5 قطع', price: { "": 60 }, description: ""},
      { name: 'طبق سمبوسة لحمة 5 قطع', price: { "": 60 }, description: ""},
      { name: 'طبق سمبوسة لحمة 5 قطع', price: { "": 60 }, description: ""},
      { name: 'طبق سمبوسة لحمة 5 قطع', price: { "": 60 }, description: ""},
      { name: 'طبق أرز شعرية', price: { "": 50 }, description: ""},
      { name: 'طبق كبيبة 5 قطع', price: { "": 70 }, description: "" }
    ],
    note: '',
  },
  {
    title: 'الكريب',
    items: [
      { name: ' كريب بطاطس', price: { "": 55 }, description: ""},
      { name: ' كريب بطاطس', price: { "": 55 }, description: ""},
      { name: ' كريب بطاطس', price: { "": 55 }, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: ' كريب بطاطس', price: { "": 55 }, description: ""},
      { name: ' كريب بطاطس', price: { "": 55 }, description: ""},
      { name: ' كريب بطاطس', price: { "": 55 }, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: ' كريب بطاطس', price: { "": 55 }, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: ' كريب بطاطس', price: { "": 55 }, description: ""},
      { name: ' كريب بطاطس', price: { "": 55 }, description: ""},
      { name: ' كريب بطاطس', price: { "": 55 }, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"}
    ],
    note: '',
  },
  {
    title: 'السلطات',
    items: [
      { name: 'سلطة بلدي', price: { "": 15}, description: ""},
      { name: 'سلطة طحينة', price: { "": 10 }, description: ""},
      { name: 'سلطة تومية', price: { "": 5 }, description: ""},
      { name: 'مخلل', price: { "": 5}, description: ""}
    ],
    note: '',
  },
  {
    title: 'المشروبات',
    items: [
      { name: 'مياه صغيرة', price: { "": 10 }, description: ""},
      { name: 'مياه صغيرة', price: { "": 15 }, description: ""},
      { name: 'مياه صغيرة', price: { "": 15 }, description: ""},
      { name: 'مياه صغيرة', price: { "": 15 }, description: ""},
      { name: 'مياه صغيرة', price: { "": 5 }, description: ""}
    ],
    note: '',
  },
  {
    title: 'الحواوشي',
    items: [
      { name: 'حواوشي', price: { "بلدي": 210, "سوري ص": 400, "سوري ك": 800 }, description: ""},
      { name: 'حواوشي كفته', price: { "بلدي": 210, "سوري ص": 400, "سوري ك": 800 }, description: ""}
    ],
    note: '',
  },
  {
    title: 'السندوتشات',
    items: [
      { name: 'بطاطس', price: { "كيزر": 210, "وسط": 400, "كبير": 800 }, description: ""},
      { name: 'سجق', price: { "كيزر": 210, "نص": 400, "كبير": 800 }, description: ""},
      { name: 'كفته', price: { "كيزر": 210, "نص": 400, "كبير": 800 }, description: ""},
      { name: 'بانيه مقلي', price: { "كيزر": 210, "نص": 400, "كبير": 800 }, description: ""},
      { name: 'بانيه مقلي', price: { "كيزر": 210, "نص": 400, "كبير": 800 }, description: ""},
      { name: 'بانيه مقلي', price: { "كيزر": 210, "نص": 400, "كبير": 800 }, description: ""},
      { name: 'بانيه مقلي', price: { "كيزر": 210, "نص": 400, "كبير": 800 }, description: ""},
      { name: 'بانيه مقلي', price: { "كيزر": 210, "نص": 400, "كبير": 800 }, description: ""},
      { name: 'بانيه مقلي', price: { "كيزر": 210, "نص": 400, "كبير": 800 }, description: ""},
      { name: 'بانيه مقلي', price: { "كيزر": 210, "نص": 400}, description: ""},
      { name: 'بانيه مقلي', price: { "كيزر": 210, "نص": 400}, description: ""},
      { name: 'بانيه مقلي', price: { "كيزر": 210, "نص": 400}, description: ""},
      { name: 'بانيه مقلي', price: { "كيزر": 210, "كبير": 800 }, description: ""}
    ],
    note: '',
  },
  {
    title: 'الطواجن',
    items: [
      { name: 'خضار اليوم باللحمة', price: { "صغير": 15, "كبير": 25 }, description: ""},
      { name: 'ملوخية', price: { "كبير": 400 }, description: ""},
      { name: 'بامية سادة', price: { "كبير": 400 }, description: ""},
      { name: 'خضار اليوم سادة', price: { "كبير": 400 }, description: ""},
      { name: 'بامية باللحمة البلدي', price: { "كبير": 400 }, description: ""},
      { name: 'مكرون بشاميل', price: { "كبير": 50}, description: ""}
    ],
    note: '',
  }
 
  ];

  objectKeys(obj: any): string[] {
    return obj ? Object.keys(obj) : [];
  }

  isPriceObject(price: any): boolean {
    return price && typeof price === 'object';
  }

  getPriceValue(item: any, key: string): any {
    return item.price[key];
  }

  // 
  getAllPriceKeys(items: any[]): string[] {
    const keysSet = new Set<string>();
    items.forEach(item => {
      if (this.isPriceObject(item.price)) {
        Object.keys(item.price).forEach(k => keysSet.add(k));
      }
    });
    return Array.from(keysSet);
  }


  hasMultiplePrices(items: any[]): boolean {
    return items.some(item => this.isPriceObject(item.price) && Object.keys(item.price).length > 1);
  }

  // imp
  getCategoryItems(title: string): any[] {
    const category = this.menu.find(cat => cat.title === title);
    return category ? category.items : [];
  }
  getCategoryNote(title: string): string {
    return this.menu.find(c => c.title === title)?.note || '';
  }


  // سكرول
  scrollToSection(sectionName: string) {
    const element = document.getElementById(sectionName);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  


}
