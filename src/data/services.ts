export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: "Code2" | "Smartphone" | "Cloud" | "BrainCircuit" | "Palette" | "ShieldCheck";
}

export const servicesData: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Custom Web Development",
    description: "Next.js ও আধুনিক আর্কিটেকচারে তৈরি দ্রুতগতির এবং এসইও-বান্ধব ওয়েব অ্যাপ্লিকেশন।",
    iconName: "Code2",
  },
  {
    id: "app-dev",
    title: "Mobile App Development",
    description: "iOS এবং Android-এর জন্য হাই-পারফরম্যান্স ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ সলিউশন।",
    iconName: "Smartphone",
  },
  {
    id: "cloud-devops",
    title: "Cloud & Edge Infrastructure",
    description: "Cloudflare এবং আধুনিক ক্লাউড প্ল্যাটফর্মে অটোমেটেড CI/CD ও স্কেলেবল ডিপ্লয়মেন্ট।",
    iconName: "Cloud",
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    description: "ব্যবসার কাজ সহজ ও দ্রুত করতে আধুনিক AI ও ওয়ার্কফ্লো অটোমেশন ইন্টিগ্রেশন।",
    iconName: "BrainCircuit",
  },
  {
    id: "ui-ux",
    title: "UI/UX & Prototyping",
    description: "ব্যবহারকারীর সুবিধার কথা মাথায় রেখে আকর্ষণীয় এবং মডার্ন ইন্টারফেস ডিজাইন।",
    iconName: "Palette",
  },
  {
    id: "cyber-security",
    title: "Security & Code Audit",
    description: "সফ্টওয়্যার সুরক্ষায় ইন্ডাস্ট্রি স্ট্যান্ডার্ড সিকিউরিটি টেস্ট এবং কোড অপ্টিমাইজেশন।",
    iconName: "ShieldCheck",
  },
];