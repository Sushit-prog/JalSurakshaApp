'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'as' | 'bn' | 'brx';
type Translations = {
  [key: string]: {
    [lang in Language]: string;
  };
};

const translations: Translations = {
  dashboard: {
    en: 'Dashboard',
    as: 'ডেশ্বৰ্ড',
    bn: 'ড্যাশবোর্ড',
    brx: 'ड्यासबर्ड',
  },
  prediction: {
    en: 'Prediction',
    as: 'পূৰ্বানুমান',
    bn: 'পূর্বাভাস',
    brx: 'आगामिनि',
  },
  alerts: {
    en: 'Alerts',
    as: 'সতৰ্কবাণী',
    bn: 'সতর্কতা',
    brx: 'जागृत',
  },
  submitReport: {
    en: 'Submit Report',
    as: 'প্ৰতিবেদন দাখিল কৰক',
    bn: 'রিপোর্ট জমা দিন',
    brx: 'रिपोर्ट सबमिट खालाम',
  },
  awareness: {
    en: 'Awareness',
    as: 'সচেতনতা',
    bn: 'সচেতনতা',
    brx: 'जागृति',
  },
  users: {
    en: 'Users',
    as: 'ব্যৱহাৰকাৰীসকল',
    bn: 'ব্যবহারকারীরা',
    brx: 'बाहायगिरि',
  },
  settings: {
    en: 'Settings',
    as: 'ছেটিংছ',
    bn: 'সেটিংস',
    brx: 'सेटिं',
  },
  simulateOutbreak: {
    en: 'Simulate Outbreak',
    as: 'Спаইক প্ৰতিবেদনসমূহ',
    bn: 'স্পাইক রিপোর্ট',
    brx: 'स्पाइक रिपोर्ट',
  },
  totalReports: {
    en: 'Total Reports',
    as: 'মুঠ প্ৰতিবেদন',
    bn: 'মোট রিপোর্ট',
    brx: 'गासै रिपोर्ट',
  },
  activeAlerts: {
    en: 'Active Alerts',
    as: 'সক্ৰিয় সতৰ্কবাণী',
    bn: 'সক্রিয় সতর্কতা',
    brx: 'सक्रिय जागृत',
  },
  avgWaterPh: {
    en: 'Avg. Water pH',
    as: 'গড় পানীৰ পিএচ',
    bn: 'গড় জলের পিএইচ',
    brx: 'औसत दै pH',
  },
  avgTurbidity: {
    en: 'Avg. Turbidity',
    as: 'গড় টাৰ্বিডিটি',
    bn: 'গড় টার্বিডিটি',
    brx: 'औसत टर्बिडिटि',
  },
  reportsOverview: {
    en: 'Reports Overview',
    as: 'প্ৰতিবেদনৰ অৱলোকন',
    bn: 'রিপোর্ট ওভারভিউ',
    brx: 'रिपोर्ट अवलोकन',
  },
  recentAlerts: {
    en: 'Recent Alerts',
    as: 'শেহতীয়া সতৰ্কবাণী',
    bn: 'সাম্প্রতিক সতর্কতা',
    brx: 'गोदान जागृत',
  },
  hotspotMap: {
    en: 'Hotspot Map',
    as: 'হটস্পট মেপ',
    bn: 'হটস্পট মানচিত্র',
    brx: 'हटस्पट नक्सा',
  },
  smsReportAnalyzer: {
    en: 'SMS Report Analyzer',
    as: 'এছ এম এছ প্ৰতিবেদন বিশ্লেষক',
    bn: 'এসএমএস রিপোর্ট বিশ্লেষক',
    brx: 'এসএমএস रिपोर्ट विश्लेषक',
  },
  allAlerts: {
    en: 'All Alerts',
    as: 'সকলো সতৰ্কবাণী',
    bn: 'সমস্ত সতর্কতা',
    brx: 'गासै जागृत',
  },
  alertsDescription: {
    en: 'Potential outbreaks requiring investigation.',
    as: 'অনুসন্ধানৰ প্ৰয়োজন হোৱা সম্ভাৱ্য সংক্ৰমণ।',
    bn: 'তদন্তের প্রয়োজন এমন সম্ভাব্য প্রাদুর্ভাব।',
    brx: 'नायबिजिरनायनि गोनांथि थानाय सम्भावित बेराम।',
  },
  generateNewAlerts: {
    en: 'Generate New Alerts',
    as: 'নতুন সতৰ্কবাণী সৃষ্টি কৰক',
    bn: 'নতুন সতর্কতা তৈরি করুন',
    brx: 'गोदान जागृत दानाय',
  },
  searchByVillage: {
    en: 'Search by village...',
    as: 'গাঁৱৰ দ্বাৰা সন্ধান কৰক...',
    bn: 'গ্রাম দ্বারা অনুসন্ধান করুন...',
    brx: 'गामिजों नागिर...',
  },
  status: {
    en: 'Status',
    as: 'অৱস্থা',
    bn: 'অবস্থা',
    brx: 'थासारि',
  },
  open: {
    en: 'Open',
    as: 'খোলা',
    bn: 'খোলা',
    brx: 'खुला',
  },
  investigating: {
    en: 'Investigating',
    as: 'অনুসন্ধান চলি আছে',
    bn: 'তদন্ত চলছে',
    brx: 'नायबिजिरगासिनो',
  },
  closed: {
    en: 'Closed',
    as: 'বন্ধ',
    bn: 'বন্ধ',
    brx: 'बन्ध',
  },
  severity: {
    en: 'Severity',
    as: 'গুৰুত্ব',
    bn: 'গুরুত্ব',
    brx: 'गोब्राबथि',
  },
  high: {
    en: 'High',
    as: 'অধিক',
    bn: 'উচ্চ',
    brx: 'गोबां',
  },
  medium: {
    en: 'Medium',
    as: 'মধ্যম',
    bn: 'মাঝারি',
    brx: 'गेजेर',
  },
  low: {
    en: 'Low',
    as: 'কম',
    bn: 'কম',
    brx: 'खोम',
  },
  village: {
    en: 'Village',
    as: 'গাঁও',
    bn: 'গ্রাম',
    brx: 'गामि',
  },
  reports: {
    en: 'Reports',
    as: 'প্ৰতিবেদন',
    bn: 'রিপোর্ট',
    brx: 'रिपोर्ट',
  },
  time: {
    en: 'Time',
    as: 'সময়',
    bn: 'সময়',
    brx: 'सम',
  },
  newHealthReport: {
    en: 'New Health Report',
    as: 'নতুন স্বাস্থ্য প্ৰতিবেদন',
    bn: 'নতুন স্বাস্থ্য রিপোর্ট',
    brx: 'गोदान देहा रिपोर्ट',
  },
  newHealthReportDescription: {
    en: 'Fill out the form to submit a new report.',
    as: 'নতুন প্ৰতিবেদন দাখিল কৰিবলৈ ফৰ্মখন পূৰণ কৰক।',
    bn: 'নতুন রিপোর্ট জমা দিতে ফর্মটি পূরণ করুন।',
    brx: 'गोदान रिपोर्ट सबमिट खालामनो थाखाय फोरमखौ आबुं खालाम।',
  },
  reporterName: {
    en: 'Reporter Name',
    as: 'প্ৰতিবেদকৰ নাম',
    bn: 'রিপোর্টারের নাম',
    brx: 'रिपोर्टरनि मुङ',
  },
  villageArea: {
    en: 'Village/Area',
    as: 'গাঁও/এলাকা',
    bn: 'গ্রাম/এলাকা',
    brx: 'गामि/थावन',
  },
  selectVillage: {
    en: 'Select a village',
    as: 'এখন গাঁও বাছক',
    bn: 'একটি গ্রাম নির্বাচন করুন',
    brx: 'गामि सायख’',
  },
  symptoms: {
    en: 'Symptoms',
    as: 'লক্ষণ',
    bn: 'লক্ষণ',
    brx: 'लक्षण',
  },
  fever: {
    en: 'fever',
    as: 'জ্বৰ',
    bn: 'জ্বর',
    brx: 'जार',
  },
  diarrhea: {
    en: 'diarrhea',
    as: 'ডায়েৰিয়া',
    bn: 'ডায়রিয়া',
    brx: 'डायरिया',
  },
  vomiting: {
    en: 'vomiting',
    as: 'বমি',
    bn: 'বমি',
    brx: 'बान्ति',
  },
  headache: {
    en: 'headache',
    as: 'মূৰৰ বিষ',
    bn: 'মাথাব্যথা',
    brx: 'माथानाय',
  },
  rashes: {
    en: 'rashes',
    as: 'খজুৱতি',
    bn: 'চুলকানি',
    brx: 'สิว',
  },
  numberOfCases: {
    en: 'Number of Cases',
    as: 'ঘটনাৰ সংখ্যা',
    bn: 'ঘটনার সংখ্যা',
    brx: 'केसनि अनजिमा',
  },
  waterPH: {
    en: 'Water pH',
    as: 'পানীৰ পি এইচ',
    bn: 'জলের পিএইচ',
    brx: 'दै pH',
  },
  turbidity: {
    en: 'Turbidity (NTU)',
    as: 'টাৰ্বিডিটি (NTU)',
    bn: 'টার্বিডিটি (NTU)',
    brx: 'टर्बिडिटि (NTU)',
  },
  descriptionNotes: {
    en: 'Description/Notes',
    as: 'বিৱৰণ/টোকা',
    bn: 'বিবরণ/নোট',
    brx: 'विवरण/नोट्स',
  },
  recentSubmissions: {
    en: 'Recent Submissions',
    as: 'শেহতীয়া দাখিল',
    bn: 'সাম্প্রতিক জমা',
    brx: 'गोदान सबमिट खालामनाय',
  },
  recentSubmissionsDescription: {
    en: 'A list of the most recent reports submitted.',
    as: 'দাখিল কৰা শেহতীয়া প্ৰতিবেদনসমূহৰ এখন তালিকা।',
    bn: 'জমা দেওয়া সাম্প্রতিক রিপোর্টগুলির একটি তালিকা।',
    brx: 'सबमिट खालामनाय गोदान रिपोर्टफोरनि मोनसे लिस्ट।',
  },
  date: {
    en: 'Date',
    as: 'তাৰিখ',
    bn: 'তারিখ',
    brx: 'दिनांक',
  },
  cases: {
    en: 'Cases',
    as: 'ঘটনা',
    bn: 'কেস',
    brx: 'केस',
  },
  reporter: {
    en: 'Reporter',
    as: 'প্ৰতিবেদক',
    bn: 'রিপোর্টার',
    brx: 'रिपोर्टर',
  },
  communityCampaigns: {
    en: 'Community Campaigns',
    as: 'সামূহিক প্ৰচাৰ',
    bn: 'কমিউনিটি ক্যাম্পেইন',
    brx: 'माहारि राहा',
  },
  communityCampaignsDescription: {
    en: 'Educational materials to share with communities.',
    as: 'समुदायৰ সৈতে ভাগ-বতৰা কৰিবলৈ শৈক্ষিক সামগ্ৰী।',
    bn: 'সম্প্রদায়ের সাথে ভাগ করে নেওয়ার জন্য শিক্ষামূলক উপকরণ।',
    brx: 'माहारिजों सेर खालामनो सोलोंथाइनि मुवा।',
  },
  createNewCampaign: {
    en: 'Create New Campaign',
    as: 'নতুন প্ৰচাৰ সৃষ্টি কৰক',
    bn: 'নতুন ক্যাম্পেইন তৈরি করুন',
    brx: 'गोदान राहा दा',
  },
  viewDetails: {
    en: 'View Details',
    as: 'বিৱৰণ চাওক',
    bn: 'বিস্তারিত দেখুন',
    brx: 'विवरण नाय',
  },
  downloadPDF: {
    en: 'Download PDF',
    as: 'PDF ডাউনলোড কৰক',
    bn: 'পিডিএফ ডাউনলোড করুন',
    brx: 'PDF डाउनलोड खालाम',
  },
  downloadMarkdown: {
    en: 'Download Markdown',
    as: 'Markdown ডাউনলোড কৰক',
    bn: 'মার্কডাউন ডাউনলোড করুন',
    brx: 'Markdown डाउनलोड खालाम',
  },
  createCampaignDialogTitle: {
    en: 'Create New Campaign',
    as: 'নতুন প্ৰচাৰ সৃষ্টি কৰক',
    bn: 'নতুন ক্যাম্পেইন তৈরি করুন',
    brx: 'गोदान राहा दा',
  },
  createCampaignDialogDescription: {
    en: 'Fill out the form below to create a new awareness campaign.',
    as: 'নতুন সজাগতা অভিযান সৃষ্টি কৰিবলৈ তলৰ ফৰ্মখন পূৰণ কৰক।',
    bn: 'একটি নতুন সচেতনতা প্রচার তৈরি করতে নীচের ফর্মটি পূরণ করুন।',
    brx: 'गोदान सिगिदान राहा दानायनि थाखाय गाहायनि फोरमखौ आबुं खालाम।',
  },
  title: {
    en: 'Title',
    as: 'শিৰোনাম',
    bn: 'শিরোনাম',
    brx: 'थांखि',
  },
  primaryLanguage: {
    en: 'Primary Language',
    as: 'মুখ্য ভাষা',
    bn: 'প্রধান ভাষা',
    brx: 'गिबि राव',
  },
  selectLanguage: {
    en: 'Select a language',
    as: 'এটা ভাষা বাছক',
    bn: 'একটি ভাষা নির্বাচন করুন',
    brx: 'मोनसे राव सायख',
  },
  category: {
    en: 'Category',
    as: 'শ্ৰেণী',
    bn: 'বিভাগ',
    brx: 'बाहागो',
  },
  selectCategory: {
    en: 'Select a category',
    as: 'এটা শ্ৰেণী বাছক',
    bn: 'একটি বিভাগ নির্বাচন করুন',
    brx: 'मोनसे बाहागो सायख',
  },
  waterSafety: {
    en: 'Water Safety',
    as: 'জল সুৰক্ষা',
    bn: 'জল নিরাপত্তা',
    brx: 'दै रैखायै',
  },
  diseaseInfo: {
    en: 'Disease Info',
    as: 'ৰোগৰ তথ্য',
    bn: 'রোগের তথ্য',
    brx: 'बेरामनि खौरां',
  },
  hygiene: {
    en: 'Hygiene',
    as: 'স্বাস্থ্যবিধি',
    bn: 'স্বাস্থ্যবিধি',
    brx: 'देहा फाहामनो',
  },
  summary: {
    en: 'Summary',
    as: 'সাৰাংশ',
    bn: 'সারসংক্ষেপ',
    brx: 'सुंदो',
  },
  summaryPlaceholder: {
    en: 'A short summary for the campaign card.',
    as: 'অভিযান কাৰ্ডৰ বাবে এটা চমু সাৰাংশ।',
    bn: 'ক্যাম্পেইন কার্ডের জন্য একটি সংক্ষিপ্ত সারসংক্ষেপ।',
    brx: 'राहानि कार्डनि थाखाय मोनसे सुंदो सुंदो।',
  },
  bodyMessage: {
    en: 'Body/Message',
    as: 'মূল/বাৰ্তা',
    bn: 'মূল/বার্তা',
    brx: 'देहा/खौरां',
  },
  bodyPlaceholder: {
    en: 'The full content of the campaign. You can use line breaks to create new paragraphs.',
    as: 'অভিযানৰ সম্পূৰ্ণ বিষয়বস্তু। আপুনি নতুন দফা সৃষ্টি কৰিবলৈ লাইন ব্ৰেক ব্যৱহাৰ কৰিব পাৰে।',
    bn: 'ক্যাম্পেইনের সম্পূর্ণ বিষয়বস্তু। আপনি নতুন অনুচ্ছেদ তৈরি করতে লাইন ব্রেক ব্যবহার করতে পারেন।',
    brx: 'राहानि आबुं बाथ्रा। गोदान प्यारा दानायनि थाखाय नों लाइन ब्रेक्स बाहायनो हागोन।',
  },
  createCampaign: {
    en: 'Create Campaign',
    as: 'প্ৰচাৰ সৃষ্টি কৰক',
    bn: 'ক্যাম্পেইন তৈরি করুন',
    brx: 'राहा दा',
  },
  campaignCreated: {
    en: 'Campaign Created',
    as: 'প্ৰচাৰ সৃষ্টি কৰা হ\'ল',
    bn: 'ক্যাম্পেইন তৈরি হয়েছে',
    brx: 'राहा दाबाय',
  },
  campaignCreatedSuccess: {
    en: 'The new awareness campaign has been successfully added.',
    as: 'নতুন সজাগতা অভিযান সফলতাৰে যোগ কৰা হৈছে।',
    bn: 'নতুন সচেতনতা প্রচার সফলভাবে যোগ করা হয়েছে।',
    brx: 'गोदान सिगिदान राहा मोजाङै दाजाबाय।',
  },
  comingSoon: {
    en: 'Coming Soon!',
    as: 'хутка!',
    bn: 'শীঘ্রই আসছে!',
    brx: 'खुलुमनो!',
  },
  pdfNotImplemented: {
    en: 'PDF download functionality is not yet implemented.',
    as: 'PDF ডাউনলোড কাৰ্যক্ষমতা এতিয়াও কাৰ্যকৰী হোৱা নাই।',
    bn: 'পিডিএফ ডাউনলোড কার্যকারিতা এখনো প্রয়োগ করা হয়নি।',
    brx: 'PDF डाउनलोडनि खामानिखौ दासिम मावाखै।',
  },
};

interface I18nContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
