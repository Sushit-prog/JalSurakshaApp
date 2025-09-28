
export type Campaign = {
  id: string;
  title: {
    english: string;
    assamese: string;
    bengali: string;
    bodo: string;
    manipuri: string;
    khasi: string;
  };
  summary: {
    english: string;
    assamese: string;
    bengali: string;
    bodo: string;
    manipuri: string;
    khasi: string;
  };
  content: {
    english: string;
    assamese: string;
    bengali: string;
    bodo: string;
    manipuri: string;
    khasi: string;
  };
  category: string;
  language: string;
  imageId: string;
};

export const initialCampaigns: Campaign[] = [
  {
    id: 'campaign-1',
    title: {
      english: 'Safe Drinking Water During Monsoon',
      assamese: 'বৰষুণৰ সময়ত নিৰাপদ খোৱা পানী',
      bengali: 'বর্ষাকালে নিরাপদ পানীয় জল',
      bodo: 'बरसा समनि थाखायै मोजां दै',
      manipuri: 'চোংগ্রা অমদি মরাং কায়না থকপা ঈশিং',
      khasi: 'Ka Um Dih kaba Khuid ha ka por Lyiur',
    },
    summary: {
      english: 'Learn how to ensure your drinking water is safe during the rainy season to prevent water-borne diseases.',
      assamese: 'জলजन्य ৰোগ প্ৰতিৰোধ কৰিবলৈ বৰষুণৰ দিনত আপোনাৰ খোৱা পানী কেনেকৈ নিৰাপদ ৰাখিব লাগে শিকিব।',
      bengali: 'জলবাহিত রোগ প্রতিরোধ করতে বর্ষাকালে আপনার পানীয় জল কীভাবে নিরাপদ রাখবেন তা শিখুন।',
      bodo: 'दैजों जायो बेरामफोरखौ होबथानो थाखाय बरसा समाव नोंनि लोंग्रा दैखौ माबोरै सुरक्षित लाखिनो हायो, सोलों।',
      manipuri: 'মরাং কায়না থকপা ঈশিংগী অমাং অতা লৌথোক্নবা অমদি লৌশিং লৌবা।',
      khasi: 'Hikai kumno ban pynthikna ba ka umdih jong phi ka long kaba khuid ha ka por lyiur ban iada na ki khniang jingpang kiba lah ban pur lyngba ka um.',
    },
    content: {
      english: `
        <h3>Why is it important?</h3>
        <p>During the monsoon, floodwaters can contaminate wells, ponds, and other water sources with harmful bacteria and viruses, leading to diseases like cholera, typhoid, and diarrhea.</p>
        <h3>Simple Steps for Safe Water:</h3>
        <ul>
          <li><strong>Boil Water:</strong> Always boil your drinking water for at least 1 minute.</li>
          <li><strong>Use Filters:</strong> If available, use a reliable water filter.</li>
          <li><strong>Chlorination:</strong> Add chlorine tablets as per instructions to disinfect water.</li>
          <li><strong>Cover Storage:</strong> Keep drinking water in clean, covered containers.</li>
        </ul>
      `,
      assamese: `
        <h3>এইটো কিয় গুৰুত্বপূৰ্ণ?</h3>
        <p>বৰষুণৰ সময়ত, বানপানীয়ে кла, পুখুৰী, আৰু অন্য পানীৰ উৎসবোৰক ক্ষতিকাৰক বেক্টেरिया আৰু ভাইৰাছৰ দ্বাৰা দূষিত কৰিব পাৰে, যাৰ ফলত কলেৰা, টাইফয়েড, আৰু ডায়েৰিয়াৰ দৰে ৰোগ হয়।</p>
        <h3>নিৰাপদ পানীৰ বাবে সৰল পদক্ষেপ:</h3>
        <ul>
          <li><strong>পানী উতলাওক:</strong> আপোনাৰ খোৱা পানী সদায় কমেও ১ মিনিটৰ বাবে উতলাওক।</li>
          <li><strong>ফিল್ಟাৰ ব্যৱহাৰ কৰক:</strong> যদি উপলব্ধ, এটা বিশ্বাসযোগ্য পানী ফিল್ಟাৰ ব্যৱহাৰ কৰক।</li>
          <li><strong>ক্ল'ৰিনেচন:</strong> নিৰ্দেশনা অনুসৰি ক্ল'ৰিন টেবলেট যোগ কৰি পানী বীজাণুমুক্ত কৰক।</li>
          <li><strong>সংগ্ৰহ ঢাকি ৰাখক:</strong> খোৱা পানী চাফা, ঢাকি ৰখা পাত্ৰত ৰাখক।</li>
        </ul>
      `,
      bengali: `
        <h3>কেন এটি গুরুত্বপূর্ণ?</h3>
        <p>বর্ষার সময়, বন্যার জল কুয়া, পুকুর এবং অন্যান্য জলের উৎসগুলিকে ক্ষতিকারক ব্যাকটেরিয়া এবং ভাইরাস দ্বারা দূষিত করতে পারে, যা কলেরা, টাইফয়েড এবং ডায়রিয়ার মতো রোগের কারণ হয়।</p>
        <h3>নিরাপদ জলের জন্য সহজ পদক্ষেপ:</h3>
        <ul>
          <li><strong>জল ফোটান:</strong> আপনার পানীয় জল সর্বদা কমপক্ষে ১ মিনিট ধরে ফোটান।</li>
          <li><strong>ফিল্টার ব্যবহার করুন:</strong> যদি উপলব্ধ থাকে, একটি নির্ভরযোগ্য জল ফিল্টার ব্যবহার করুন।</li>
          <li><strong>ক্লোরিনেশন:</strong> জল জীবাণুমুক্ত করতে নির্দেশাবলী অনুযায়ী ক্লোরিন ট্যাবলেট যোগ করুন।</li>
          <li><strong>সংগ্রহ ঢেকে রাখুন:</strong> পানীয় জল পরিষ্কার, ঢাকা পাত্রে রাখুন।</li>
        </ul>
      `,
      bodo: `
        <h3>बेयो मानो गोनां?</h3>
        <p>बरसा समाव, दै बानायाव कुवा, फुख्रि आरो गुबुन दै बिखायाव खहा खालामग्रा बेक्टेरिया आरो भाइरासजों गोबां बेराम जेरै कलेरा, टाइफाइड आरो डायरिया जानो हागौ।</p>
        <h3>सुरक्षित दैनि सोलो उपायफोर:</h3>
        <ul>
          <li><strong>दैखौ फुदुं:</strong> नोंनि लोंग्रा दैखौ जेब्लायबो खमसेकम १ मिनिट फुदुं।</li>
          <li><strong>फिल्टार बाहाय:</strong> जुदि थायो, मोनसे फोथायथावना दै फिल्टार बाहाय।</li>
          <li><strong>क्लोरीनेशन:</strong> दैखौ बेरामनिफ्राय रैखा खालामनो थाखाय बिथोन होनाय बादियै क्लोरीन ट्याबलेट हो।</li>
          <li><strong>संग्रह खालामनायखौ खोबना दोन:</strong> लोंग्रा दैखौ साफा, खोबना दोननाय आदुवाव दोन।</li>
        </ul>
      `,
      manipuri: `
        <h3>করিগীদমক প্রোয়াজন ওইবগে?</h3>
        <p>চোংগ্রা অমদি মরাং কায়না থকপা ঈশিংগী মশিং হেনগৎলকপনা, ঈশিংগী মчин অমদি মগুনশিংগীদমক্তা লৌশিং লৌবা।</p>
        <h3>ঈশিংগীদমক্তা অমাং অতা লৌথোক্নবা মগুনশিং:</h3>
        <ul>
          <li><strong>ঈশিং থాকপা:</strong> অদোমগী থকপা ঈশিংবু মতম পুম্নমক্তা মিনিট অমা ওইনা থాকউ।</li>
          <li><strong>ফিল্টার শীজিন্নবা:</strong> ফংबिरবদি, অদোমগীদমক্তা পুক্নینگ থोनba য়াবা ঈশিং ফিল্টার অমা শীজিন্নবীয়ু।</li>
          <li><strong>ক্লোরিনেশন:</strong> ঈশিং শెంdoknaba মতিক চaba ক্লোরিন ট্যাবলেটশিং হাপকৎপীযু।</li>
          <li><strong>कनभेर স্তোরেজ:</strong> থকপা ঈশিংবু লুনা-নানা থंबा অমদি মচুদা থंबा পাত্রদা থಂಬীয়ু।</li>
        </ul>
      `,
       khasi: `
        <h3>Balei ka long kaba kongsan?</h3>
        <p>Ha ka por lyiur, ka jingshlei ka lah ban pynjakhlia ia ki thwei, ki pung, bad kiwei ki tyllong um da ki khniang jingpang bad ki virus kiba mynsaw, kaba ialam sha ki jingpang kum ka cholera, ka typhoid, bad ka pynhiar kpoh.</p>
        <h3>Ki lynti kiba suk na ka bynta ka um kaba khuid:</h3>
        <ul>
          <li><strong>Pynthnam ia ka Um:</strong> Pynthnam ia ka umdih jong phi man ka por kumba 1 minit.</li>
          <li><strong>Pyndonkam da ki Filters:</strong> Lada don, pyndonkam da ka filter um kaba lah ban shaniah.</li>
          <li><strong>Chlorination:</strong> Buh ki dawai chlorine katkum ki jingbthah ban pynkhuid ia ka um.</li>
          <li><strong>Tap ia ka Jinglum:</strong> Buh ia ka umdih ha ki tiar kiba khuid, kiba la tap.</li>
        </ul>
      `,
    },
    category: 'Water Safety',
    language: 'English',
    imageId: 'safe-drinking-water'
  },
  {
    id: 'campaign-2',
    title: {
      english: 'Early Symptoms of Cholera',
      assamese: 'কলেৰাৰ প্ৰাৰম্ভিক লক্ষণ',
      bengali: 'কলেরার প্রাথমিক লক্ষণ',
      bodo: 'कलेरानि गिबि लक्षणफोर',
      manipuri: 'চলেরাগী অহানবা симptomশিং',
      khasi: 'Ki Dak Ki Shin kiba Mynshwa jong ka Cholera',
    },
    summary: {
      english: 'Recognize the early signs of Cholera for quick medical attention and to prevent its spread.',
      assamese: 'কলেৰাৰ প্ৰাৰম্ভিক লক্ষণবোৰ সোনকালে চিকিৎসাৰ বাবে আৰু ইয়াৰ সংক্ৰমণ প্ৰতিৰোধ কৰিবলৈ চিনাক্ত কৰক।',
      bengali: 'দ্রুত চিকিৎসার জন্য এবং এর বিস্তার রোধ করতে কলেরার প্রাথমিক লক্ষণগুলি চিনুন।',
      bodo: 'गोख्रै चिकित्सा आरो बेनि फैलावखौ होबथानो थाखाय कलेरानि गिबि लक्षणफोरखौ सिनाय।',
      manipuri: 'চলেরাগী অহানবা মতমগীদমক লায়েংনবগীদমক অমদি মসিবু பரবোক হন্থহন্নবগীদমক অহানবা симptomশিংবু খঙবীয়ু।',
      khasi: 'Ithuh ia ki dak ki shin kiba mynshwa jong ka Cholera na ka bynta ka jingsumar kaba kloi bad ban iada na ka jingsaphriang jong ka.',
    },
    content: {
      english: `
        <h3>What is Cholera?</h3>
        <p>Cholera is an acute diarrheal illness caused by infection of the intestine with the bacterium Vibrio cholerae.</p>
        <h3>Key Symptoms:</h3>
        <ul>
          <li><strong>Severe Watery Diarrhea:</strong> Often described as "rice-water stools".</li>
          <li><strong>Vomiting:</strong> Occurs in the early stages.</li>
          <li><strong>Dehydration:</strong> Rapid loss of body fluids leads to dehydration. Look for thirst, dry mouth, and reduced urination.</li>
          <li><strong>Muscle Cramps:</strong> Caused by the loss of salts.</li>
        </ul>
        <p>If you see these symptoms, seek medical help immediately and drink Oral Rehydration Solution (ORS).</p>
      `,
      assamese: `
        <h3>কলেৰা কি?</h3>
        <p>কলেৰা হৈছে Vibrio cholerae বেক্টেरियाৰ দ্বাৰা অন্ত্ৰৰ সংক্ৰমণৰ ফলত হোৱা এক তীব্ৰ ডায়েৰিয়াজনিত ৰোগ।</p>
        <h3>মুখ্য লক্ষণসমূহ:</h3>
        <ul>
          <li><strong>তীব্ৰ পানীৰ দৰে ডায়েৰিয়া:</strong> ইয়াক প্ৰায়ে "চাউল-পানীৰ দৰে মল" বুলি বৰ্ণনা কৰা হয়।</li>
          <li><strong>বমি:</strong> প্ৰাৰম্ভিক পৰ্যায়ত হয়।</li>
          <li><strong>ডিহাইড্ৰেচন:</strong> শৰীৰৰ তৰল পদাৰ্থৰ দ্ৰুত ক্ষতিয়ে ডিহাইড্ৰেচনলৈ লৈ যায়। পিয়াহ, শুকান মুখ, আৰু কম প্ৰস্ৰাৱৰ বাবে চাওক।</li>
          <li><strong>মাংসপেশীৰ ক্ৰেম্প:</strong> লৱণৰ ক্ষতিৰ ফলত হয়।</li>
        </ul>
        <p>যদি আপুনি এই লক্ষণবোৰ দেখে, তেন্তে তৎকালীনভাৱে চিকিৎসা সহায় লওক আৰু মৌখিক পুনৰ্জলীয়কৰণ সমাধান (ORS) খাওক।</p>
      `,
      bengali: `
        <h3>কলেরা কী?</h3>
        <p>কলেরা হল Vibrio cholerae ব্যাকটেরিয়া দ্বারা অন্ত্রের সংক্রমণের কারণে সৃষ্ট একটি তীব্র ডায়রিয়াজনিত অসুস্থতা।</p>
        <h3>মূল লক্ষণসমূহ:</h3>
        <ul>
          <li><strong>গুরুতর জলীয় ডায়রিয়া:</strong> প্রায়শই "চাল-ধোয়া জলের মতো মল" হিসাবে বর্ণনা করা হয়।</li>
          <li><strong>বমি:</strong> প্রাথমিক পর্যায়ে ঘটে।</li>
          <li><strong>ডিহাইড্রেশন:</strong> শরীরের তরল পদার্থের দ্রুত ক্ষয় ডিহাইড্রেশনের দিকে পরিচালিত করে। তৃষ্ণা, শুকনো মুখ এবং প্রস্রাব কমে যাওয়ার দিকে খেয়াল রাখুন।</li>
          <li><strong>পেশী ખેંચ:</strong> লবণ হারানোর কারণে হয়।</li>
        </ul>
        <p>যদি আপনি এই লক্ষণগুলি দেখেন, অবিলম্বে চিকিৎসা সহায়তা নিন এবং ওরাল রিহাইড্রেশন সলিউশন (ORS) পান করুন।</p>
      `,
      bodo: `
        <h3>कलेरा मा?</h3>
        <p>कलेरा Vibrio cholerae बेक्टेरियाजों बिबाननि संक्रमणनि जाउनाव जायो मोनसे गोब्राब डायरिया बेराम।</p>
        <h3>गिबि लक्षणफोर:</h3>
        <ul>
          <li><strong>गोब्राब दै बायदि डायरिया:</strong> जेब्लायबो "मायनि दै बायदि পায়खाना" होननानै बुंनाय जायो।</li>
          <li><strong>बान्ति खालामनाय:</strong> गिबि अवस्थायाव जायो।</li>
          <li><strong>डिहाइड्रेसन:</strong> देहायाव दैनि गोब्राब खहाया डिहाइड्रेसन खालामो। दै लोंनो गोसो जानाय, खुगा राननाय, आरो सु सुनाय खम जानाय नाय।</li>
          <li><strong>मांसपेशीयाव खबनाय:</strong> नोननि खहानि थाखाय जायो।</li>
        </ul>
        <p>जुदि नों बे लक्षणफोरखौ नुयो, गोख्रै चिकित्सा मदद ला आरो Oral Rehydration Solution (ORS) लों।</p>
      `,
      manipuri: `
        <h3>চলেরা করি নো?</h3>
        <p>চলেরা হায়বসি Vibrio cholerae হায়বা বেক্টেরিয়া অসিনা ইন্টেস্টাইনদা ইনফেক্সন তৌবদগী থোকপা অমাংবা চীং কাইবা অমা।</p>
        <h3> মরুওইবা চীংนูংশিং:</h3>
        <ul>
          <li><strong>অমাংবা ঈশিং ওইনা চীং কাইবা:</strong> মসিদা "চেংগী মরু ওইনা চীং কাইবা" হায়না পน্নৈ।</li>
          <li><strong>হিদাক কাইবা:</strong> অহানবা স্তেজদা ওই।</li>
          <li><strong>דיהידרציה:</strong> হকচাংদা ঈশিংগী মশিং হন্থরকপনা דיהידרציה ওইহল্লি। ঈশিং চারংba, চীংদা ঈশিং યાओদবা, অমদি য়ুрина কম ওইবা উবা।</li>
          <li><strong>মাংসপেশীদা cramp ওইবা:</strong> সল্ট হন্থরকপনা ওই।</li>
        </ul>
        <p>নহাক্না মসিগী চীংนูংশিং অসি উরবদি, মতম চানা मेদিকেল মতেং লৌ অমদি Oral Rehydration Solution (ORS) থকउ।</p>
      `,
      khasi: `
        <h3>Kaei ka Cholera?</h3>
        <p>Ka Cholera ka dei ka jingpang pynhiar kpoh kaba jur kaba wan na ka jingkem jong ka snier da u khniang jingpang Vibrio cholerae.</p>
        <h3>Ki Dak Ki Shin kiba Kongsan:</h3>
        <ul>
          <li><strong>Ka Jingpynhiar Kpoh kaba long kum ka Um:</strong> Bunsien la batai kum "ka jakhlia kaba long kum ka um khaw".</li>
          <li><strong>Ka Jingprie:</strong> Ka jia ha ki bynta kiba sdang.</li>
          <li><strong>Ka Jingduna Um ha ka Met:</strong> Ka jingduh noh kloi ki um ha ka met ka ialam sha ka jingduna um. Peit ia ka jingsliang, ka shyntur kaba tyrkhong, bad ka jingduna ka jingpynmih umjung.</li>
          <li><strong>Ka Jingktha ki Dohksah:</strong> Ka wan na ka jingduh ki mluh.</li>
        </ul>
        <p>Lada phi iohi ia kine ki dak ki shin, wad ia ka jingsumar doktor mar mar bad dih ia ka Oral Rehydration Solution (ORS).</p>
      `,
    },
    category: 'Disease Info',
    language: 'Assamese',
    imageId: 'health-worker-community'
  },
  {
    id: 'campaign-3',
    title: {
      english: 'Proper Handwashing Technique',
      assamese: 'সঠিকভাৱে হাত ধোৱাৰ কৌশল',
      bengali: 'সঠিক হাত ধোয়ার কৌশল',
      bodo: 'मोजांङै आखाय सुनायनि खान्थि',
      manipuri: 'करमना खुৎ হামdokpa ममौInnaka',
      khasi: 'Ka Rukom kaba dei ban Sait kti',
    },
    summary: {
        english: 'Master the 6 steps of handwashing to protect yourself and your family from germs.',
        assamese: 'নিজকে আৰু আপোনাৰ পৰিয়ালক বীজাণুৰ পৰা ৰক্ষা কৰিবলৈ হাত ধোৱাৰ 6 টা পদক্ষেপ শিকক।',
        bengali: 'জীবাণু থেকে নিজেকে এবং আপনার পরিবারকে রক্ষা করতে হাত ধোয়ার ৬টি ধাপ আয়ত্ত করুন।',
        bodo: 'रोगाणुफोरनिफ्राय गावखौ आरो नोंनि नखरखौ रैखा खालामनो थाखाय आखाय सुनायनि 6 था स्टेप्सखौ मोजांङै सोलों।',
        manipuri: 'করমনা खुৎ হামdokpa মमौInnakaগী ৬শুবা stepশিং অসি तमদুনা নহাক অমদি নহাক্কী ইমুং মনুংবু germsশিংদগী কনবীয়ু।',
        khasi: 'Nang ia ki 6 tylli ki rukom saitkti ban iada ialade bad ia ka iing ka sem jong phi na ki khniang jingpang.',
    },
    content: {
      english: `
        <h3>Why Handwashing Matters:</h3>
        <p>Clean hands prevent infections. It's one of the easiest and most effective ways to stay healthy.</p>
        <h3>6 Steps to Perfect Handwashing:</h3>
        <ol>
          <li><strong>Wet:</strong> Wet your hands with clean, running water.</li>
          <li><strong>Lather:</strong> Apply soap and lather well.</li>
          <li><strong>Scrub:</strong> Rub hands together for at least 20 seconds. Cover all surfaces.</li>
          <li><strong>Rinse:</strong> Rinse hands well under running water.</li>
          <li><strong>Dry:</strong> Dry hands using a clean towel or air dry them.</li>
          <li><strong>Turn off Tap:</strong> Use the towel to turn off the tap.</li>
        </ol>
      `,
      assamese: `
        <h3>হাত ধোৱা কিয় গুৰুত্বপূৰ্ণ:</h3>
        <p>চাফা হাতে সংক্ৰমণ প্ৰতিৰোধ কৰে। स्वस्थ থাকিবলৈ এইটো অন্যতম সহজ আৰু আটাইতকৈ কাৰ্যকৰী উপায়।</p>
        <h3>নিখুঁতভাৱে হাত ধোৱাৰ 6 টা পদক্ষেপ:</h3>
        <ol>
          <li><strong>তিতা কৰক:</strong> চাফা, চলি থকা পানীৰে আপোনাৰ হাত তিতা কৰক।</li>
          <li><strong>ফেন কৰক:</strong> চাবোন লগাই ভালদৰে ফেন কৰক।</li>
          <li><strong>ঘঁহক:</strong> কমেও 20 ছেকেণ্ডৰ বাবে হাত দুখন একেলগে ঘঁহক। সকলো পৃষ্ঠ সামৰি লওক।</li>
          <li><strong>ধুই দিয়ক:</strong> চলি থকা পানীৰ তলত ভালদৰে হাত ধুই দিয়ক।</li>
          <li><strong>শুকুৱাওক:</strong> চাফা টাৱেল ব্যৱহাৰ কৰি হাত শুকুৱাওক বা বতাহত শুকুৱাবলৈ দিয়ক।</li>
          <li><strong>नल বন্ধ কৰক:</strong> नल বন্ধ কৰিবলৈ টাৱেল ব্যৱহাৰ কৰক।</li>
        </ol>
      `,
      bengali: `
        <h3>হাত ধোয়া কেন গুরুত্বপূর্ণ:</h3>
        <p>পরিষ্কার হাত সংক্রমণ প্রতিরোধ করে। সুস্থ থাকার এটি অন্যতম সহজ এবং সবচেয়ে কার্যকর উপায়।</p>
        <h3>নিখুঁত হাত ধোয়ার ৬টি ধাপ:</h3>
        <ol>
          <li><strong>ভেজান:</strong> পরিষ্কার, চলমান জলে আপনার হাত ভেজান।</li>
          <li><strong>সাবান লাগান:</strong> সাবান লাগিয়ে ভালো করে ফেনা তৈরি করুন।</li>
          <li><strong>ঘষুন:</strong> কমপক্ষে ২০ সেকেন্ড ধরে দুই হাত একসাথে ঘষুন। সমস্ত পৃষ্ঠতল ঢেকে দিন।</li>
          <li><strong>ধুয়ে ফেলুন:</strong> চলমান জলের নিচে ভালো করে হাত ধুয়ে ফেলুন।</li>
          <li><strong>শুকনো করুন:</strong> একটি পরিষ্কার তোয়ালে ব্যবহার করে হাত শুকনো করুন বা বাতাসে শুকিয়ে নিন।</li>
          <li><strong>কল বন্ধ করুন:</strong> কল বন্ধ করতে তোয়ালে ব্যবহার করুন।</li>
        </ol>
      `,
      bodo: `
        <h3>आखाय सुनाय मानो गोनां:</h3>
        <p>साफा आखाय संक्रमणखौ होबथायो। बेयो देहा मोजां लाखिनो थाखाय मोनसे সহজ आरो गोनांथार उपाय।</p>
        <h3>आखाय सुनायनि 6 था स्टेप्स:</h3>
        <ol>
          <li><strong>सिदो:</strong> साफा, खारबाय थानाय दैजों नोंनि आखायखौ सिदो।</li>
          <li><strong>साबोन हो:</strong> साबोन हो आरो मोजांङै फेन खालाम।</li>
          <li><strong>हुख्रुद:</strong> खमसेकम 20 सेकेण्ड नोंनि आखायखौ हुख्रुद। गासैबो जायगाखौ खोबनानै ला।</li>
          <li><strong>सुस्रुब:</strong> खारबाय थानाय दैजों आखायखौ मोजांङै सुस्रुब।</li>
          <li><strong>रान हो:</strong> साफा टावेलजों आखायखौ रान हो एबा बारजोंनो रान हो।</li>
          <li><strong>टेप बन्द खालाम:</strong> टेप बन्द खालामनो थाखाय टावेल बाहाय।</li>
        </ol>
      `,
      manipuri: `
        <h3>खुৎ হামdokpa করিগীদমক মরুওইবগে?</h3>
        <p>clean handsna इन्फेक्सनশিংবু থিংই। মসি হকচাং ফনা থম্নবগীদমক্তা খ्वাইদগী லைবা অমদি ইফেক্টিভ ওইবা পাম্বৈশিংগী মনুংda অমনি।</p>
        <h3>परफेक्ट खुৎ হামdokpaগী ৬শুবা stepশিং:</h3>
        <ol>
          <li><strong>Wet:</strong> clean, running waterda নহাক্কী खुৎpu wet तৌ।</li>
          <li><strong>Lather:</strong> soap হাপকৎলগা lather ফনা तৌ।</li>
          <li><strong>Scrub:</strong> секунд २०गी ওইনা खुৎpu scrub तৌ। surface পুম্নمک cover तৌ।</li>
          <li><strong>Rinse:</strong> running waterda खुৎpu ফনা rinse तৌ।</li>
          <li><strong>Dry:</strong> clean towel অমনা खुৎpu dry तৌ नৎtraga air dry तৌ।</li>
          <li><strong>Turn off Tap:</strong> tappu turn off তৌনবা towelpu শীজিন্নउ।</li>
        </ol>
      `,
       khasi: `
        <h3>Balei ka jing saitkti ka long kaba kongsan:</h3>
        <p>Ki kti kiba khuid ki iada na ki jingpang. Ka dei kawei na ki lynti kiba suk tam bad kiba seisoh tam ban long uba koit ba khiah.</p>
        <h3>6 tylli ki rukom ban saitkti pura:</h3>
        <ol>
          <li><strong>Pynsngem:</strong> Pynsngem ia ki kti jong phi da ka um kaba khuid, kaba tuid.</li>
          <li><strong>Buh Sabon:</strong> Buh sabon bad pynmih shibun ka thap.</li>
          <li><strong>Kynthah:</strong> Kynthah ia ki kti lang kumba 20 sekhon. Kynthah baroh ki bynta.</li>
          <li><strong>Sait:</strong> Sait bha ia ki kti hapoh ka um kaba tuid.</li>
          <li><strong>Pynrkhiang:</strong> Pynrkhiang ia ki kti da ka towel kaba khuid ne pynrkhiang ha ka lyer.</li>
          <li><strong>Khnang ia ka Klong Um:</strong> Pyndonkam da ka towel ban khnang ia ka klong um.</li>
        </ol>
      `,
    },
    category: 'Hygiene',
    language: 'English',
    imageId: 'hand-washing'
  }
];

    
