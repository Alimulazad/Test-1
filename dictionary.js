const dictionary = [
  {
    word: "axon",
    meaning: "একটি স্নায়ুকোষের প্রসারিত অংশ যা বিদ্যুৎ সংকেত পরিবহন করে।",
    breakdown: "a- (অক্ষ) + -xon (অঞ্চল)",
    example: "অ্যাক্সন স্নায়ুকোষের দেহ থেকে সংকেত দূরে পাঠায়।"
  },
  {
    word: "dendrite",
    meaning: "স্নায়ুকোষের শাখা যা তথ্য গ্রহণ করে।",
    breakdown: "dendro- (গাছ) + -ite (ছোট অংশ)",
    example: "ডেনড্রাইট স্নায়ুকোষের দেহের দিকে সংকেত বহন করে।"
  },
  {
    word: "enzyme",
    meaning: "একটি জৈব রাসায়নিক যা বিক্রিয়াকে ত্বরান্বিত করে।",
    breakdown: "en- (ভিতরে) + zyme (খামির)",
    example: "এনজাইম হজম প্রক্রিয়ায় খাদ্য ভাঙতে সাহায্য করে।"
  },
  {
    word: "cerebrum",
    meaning: "মস্তিষ্কের সবচেয়ে বড় অংশ, চিন্তাভাবনা ও স্মৃতির জন্য দায়ী।",
    breakdown: "cerebr- (মস্তিষ্ক) + -um (কাঠামো)",
    example: "সেরিব্রাম হাঁটা-চলার মতো ইচ্ছাকৃত কাজ নিয়ন্ত্রণ করে।"
  },
  {
    word: "cerebellum",
    meaning: "মস্তিষ্কের পিছনের অংশ, ভারসাম্য ও সমন্বয় নিয়ন্ত্রণ করে।",
    breakdown: "cerebr- (মস্তিষ্ক) + -ellum (ছোট)",
    example: "সেরিবেলাম পেশির গতিবিধি সমন্বয় করতে সাহায্য করে।"
  },
  {
    word: "brainstem",
    meaning: "মস্তিষ্ক ও মেরুদণ্ডের সংযোগকারী অংশ, শ্বাস-প্রশ্বাস নিয়ন্ত্রণ করে।",
    breakdown: "brain (মস্তিষ্ক) + stem (কাণ্ড)",
    example: "ব্রেনস্টেম হৃদস্পন্দন ও শ্বাস-প্রশ্বাস নিয়ন্ত্রণ করে।"
  },
  {
    word: "frontal lobe",
    meaning: "মস্তিষ্কের সম্মুখভাগ, সিদ্ধান্ত গ্রহণ ও ব্যক্তিত্বের জন্য দায়ী।",
    breakdown: "front- (সামনে) + lobe (বিভাগ)",
    example: "ফ্রন্টাল লোব পরিকল্পনা ও যুক্তিতে জড়িত।"
  },
  {
    word: "parietal lobe",
    meaning: "মস্তিষ্কের উপরের অংশ, স্পর্শ ও চাপ সংবেদনের জন্য দায়ী।",
    breakdown: "pariet- (দেয়াল) + lobe (বিভাগ)",
    example: "প্যারাইটাল লোব সংবেদনশীল তথ্য প্রক্রিয়া করে।"
  },
  {
    word: "temporal lobe",
    meaning: "মস্তিষ্কের পাশের অংশ, শ্রবণ ও স্মৃতির জন্য দায়ী।",
    breakdown: "tempor- (পাশ/সময়) + lobe (বিভাগ)",
    example: "টেম্পোরাল লোব ভাষা বোঝার কাজে সাহায্য করে।"
  },
  {
    word: "occipital lobe",
    meaning: "মস্তিষ্কের পিছনের অংশ, দৃষ্টি প্রক্রিয়াকরণের জন্য দায়ী।",
    breakdown: "occipit- (মাথার পিছন) + lobe (বিভাগ)",
    example: "অক্সিপিটাল লোব দৃশ্য তথ্য প্রক্রিয়া করে।"
  },
  {
    word: "skull",
    meaning: "মাথার হাড়ের কাঠামো, যা মস্তিষ্ককে রক্ষা করে।",
    breakdown: "skull (মাথার খুলি)",
    example: "মাথার খুলি মস্তিষ্ককে আঘাত থেকে রক্ষা করে।"
  },
  {
    word: "cranium",
    meaning: "মাথার খুলির উপরের অংশ, মস্তিষ্কের আবরণ।",
    breakdown: "crani- (মাথার খুলি) + -um (কাঠামো)",
    example: "ক্রেনিয়াম মস্তিষ্ককে নিরাপদে আবৃত করে।"
  },
  {
    word: "mandible",
    meaning: "নিচের চোয়ালের হাড়, দাঁত ধারণ করে।",
    breakdown: "mand- (চিবানো) + -ible (সক্ষম)",
    example: "ম্যান্ডিবল চিবানোর সময় নড়াচড়া করে।"
  },
  {
    word: "maxilla",
    meaning: "উপরের চোয়ালের হাড়, দাঁত ধারণ করে।",
    breakdown: "maxill- (চোয়াল) + -a (কাঠামো)",
    example: "ম্যাক্সিলা উপরের দাঁত সমর্থন করে।"
  },
  {
    word: "sinus",
    meaning: "মুখের হাড়ের ফাঁপা গহ্বর, শ্বাস-প্রশ্বাসে সহায়তা করে।",
    breakdown: "sinus (গহ্বর)",
    example: "সাইনাস ঠান্ডা লাগলে বন্ধ হয়ে যেতে পারে।"
  },
  {
    word: "retina",
    meaning: "চোখের পিছনের স্তর, আলো সংবেদন করে।",
    breakdown: "retin- (জাল) + -a (কাঠামো)",
    example: "রেটিনা আলোকে স্নায়বিক সংকেতে রূপান্তরিত করে।"
  },
  {
    word: "cornea",
    meaning: "চোখের স্বচ্ছ সামনের স্তর, আলো ফোকাস করে।",
    breakdown: "corn- (শিং) + -ea (স্তর)",
    example: "কর্নিয়া আলোকে রেটিনার উপর ফোকাস করতে সাহায্য করে।"
  },
  {
    word: "iris",
    meaning: "চোখের রঙিন অংশ, পিউপিলের আকার নিয়ন্ত্রণ করে।",
    breakdown: "iris (রংধনু)",
    example: "আইরিস উজ্জ্বল আলোতে পিউপিলের আকার সামঞ্জস্য করে।"
  },
  {
    word: "pupil",
    meaning: "চোখের কালো কেন্দ্র, যেখান দিয়ে আলো প্রবেশ করে।",
    breakdown: "pupil (ছোট পুতুল)",
    example: "পিউপিল কম আলোতে প্রসারিত হয়।"
  },
  {
    word: "lens",
    meaning: "চোখের স্বচ্ছ অংশ, আলো ফোকাস করে।",
    breakdown: "lens (মসুর আকৃতির)",
    example: "লেন্স রেটিনার উপর ছবি ফোকাস করতে সাহায্য করে।"
  },
  {
    word: "optic nerve",
    meaning: "চোখ থেকে মস্তিষ্কে দৃষ্টি তথ্য পরিবহনকারী স্নায়ু।",
    breakdown: "optic (দৃষ্টি) + nerve (স্নায়ু)",
    example: "অপটিক নার্ভ দৃশ্য সংকেত বহন করে।"
  },
  {
    word: "sclera",
    meaning: "চোখের সাদা বাইরের স্তর, যা চোখকে আকৃতি দেয়।",
    breakdown: "scler- (কঠিন) + -a (কাঠামো)",
    example: "স্ক্লেরা চোখের অভ্যন্তরীণ অংশগুলো রক্ষা করে।"
  },
  {
    word: "cochlea",
    meaning: "কানের অভ্যন্তরীণ অংশ, শব্দ তরঙ্গ সংবেদন করে।",
    breakdown: "cochlea (শামুক আকৃতির)",
    example: "ককলিয়া শব্দ তরঙ্গকে সংকেতে রূপান্তরিত করে।"
  },
  {
    word: "eardrum",
    meaning: "কানের ঝিল্লি, শব্দ কম্পন গ্রহণ করে।",
    breakdown: "ear (কান) + drum (ঢাক)",
    example: "কানের ঝিল্লি শব্দ তরঙ্গে কম্পিত হয়।"
  },
  {
    word: "ossicles",
    meaning: "কানের ক্ষুদ্র হাড়, শব্দ কম্পন পরিবহন করে।",
    breakdown: "oss- (হাড়) + -icle (ছোট)",
    example: "ওসিকলস শব্দ কম্পন বাড়িয়ে দেয়।"
  },
  {
    word: "eustachian tube",
    meaning: "কান ও গলার মধ্যে সংযোগকারী নল, চাপ নিয়ন্ত্রণ করে।",
    breakdown: "Eustachian (শারীরবিদের নামে) + tube (নল)",
    example: "ইউস্টেশিয়ান টিউব কানের চাপ সমান করে।"
  },
  {
    word: "auditory nerve",
    meaning: "কান থেকে মস্তিষ্কে শব্দ তথ্য পরিবহনকারী স্নায়ু।",
    breakdown: "audit- (শোনা) + nerve (স্নায়ু)",
    example: "অডিটরি নার্ভ শব্দ সংকেত পাঠায়।"
  },
  {
    word: "nasal cavity",
    meaning: "নাকের অভ্যন্তরীণ গহ্বর, শ্বাস-প্রশ্বাসে সহায়তা করে।",
    breakdown: "nasal (নাক) + cavity (গহ্বর)",
    example: "নাসার গহ্বর ফুসফুসে পৌঁছানোর আগে বাতাস ফিল্টার করে।"
  },
  {
    word: "septum",
    meaning: "নাকের মধ্যবর্তী দেয়াল, নাসারন্ধ্রকে পৃথক করে।",
    breakdown: "sept- (দেয়াল) + -um (কাঠামো)",
    example: "বিকৃত সেপ্টাম শ্বাস-প্রশ্বাসে সমস্যা সৃষ্টি করতে পারে।"
  },
  {
    word: "turbinate",
    meaning: "নাকের অভ্যন্তরে হাড়ের কাঠামো, বাতাস ফিল্টার করে।",
    breakdown: "turbin- (ঘূর্ণায়মান) + -ate (কাঠামো)",
    example: "টারবিনেট শ্বাস নেওয়া বাতাস গরম ও আর্দ্র করে।"
  },
  {
    word: "tongue",
    meaning: "জিহ্বা, স্বাদ গ্রহণ ও কথা বলায় সহায়তা করে।",
    breakdown: "tongue (জিহ্বা)",
    example: "জিহ্বা মিষ্টি বা টকের মতো স্বাদ শনাক্ত করে।"
  },
  {
    word: "salivary gland",
    meaning: "লালা উৎপাদনকারী গ্রন্থি, হজমে সহায়তা করে।",
    breakdown: "saliv- (লালা) + gland (গ্রন্থি)",
    example: "লালাগ্রন্থি হজমে সাহায্য করতে লালা উৎপন্ন করে।"
  },
  {
    word: "palate",
    meaning: "মুখের উপরের অংশ, নরম ও শক্ত অংশ নিয়ে গঠিত।",
    breakdown: "palat- (ছাদ) + -e (কাঠামো)",
    example: "তালু মুখকে নাসার গহ্বর থেকে পৃথক করে।"
  },
  {
    word: "uvula",
    meaning: "মুখের পিছনে ঝুলন্ত মাংসপিণ্ড, গিলতে সহায়তা করে।",
    breakdown: "uvula (ছোট আঙ্গুর)",
    example: "ইউভুলা খাদ্যকে নাসার গহ্বরে প্রবেশ করতে বাধা দেয়।"
  },
  {
    word: "tonsil",
    meaning: "গলার পিছনে লিম্ফয়েড টিস্যু, রোগ প্রতিরোধে সহায়তা করে।",
    breakdown: "tonsil (লিম্ফয়েড টিস্যু)",
    example: "টনসিল গলায় সংক্রমণের বিরুদ্ধে লড়াই করে।"
  },
  {
    word: "pharynx",
    meaning: "গলার অংশ, খাদ্য ও বাতাস পরিবহন করে।",
    breakdown: "pharynx (গলা)",
    example: "ফ্যারিঙ্কস খাদ্যকে খাদ্যনালীতে পাঠায়।"
  },
  {
    word: "larynx",
    meaning: "কণ্ঠনালী, কথা বলার জন্য দায়ী।",
    breakdown: "larynx (কণ্ঠনালী)",
    example: "কণ্ঠনালী কথা বলার জন্য শব্দ উৎপন্ন করে।"
  },
  {
    word: "vocal cords",
    meaning: "কণ্ঠনালীর মধ্যে ঝিল্লি, শব্দ উৎপন্ন করে।",
    breakdown: "vocal (কণ্ঠ) + cords (তন্তু)",
    example: "ভোকাল কর্ড শব্দ উৎপন্ন করতে কম্পিত হয়।"
  },
  {
    word: "thyroid cartilage",
    meaning: "কণ্ঠনালীর হাড়, কণ্ঠনালীকে রক্ষা করে।",
    breakdown: "thyroid (ঢাল) + cartilage (তরুণাস্থি)",
    example: "থাইরয়েড কার্টিলেজ অ্যাডামস অ্যাপল গঠন করে।"
  },
  {
    word: "scalp",
    meaning: "মাথার ত্বক, চুল গজানোর স্থান।",
    breakdown: "scalp (মাথার ত্বক)",
    example: "মাথার ত্বক মাথার খুলি রক্ষা করে এবং চুল সমর্থন করে।"
  },
  {
    word: "hair follicle",
    meaning: "চুলের মূল, যেখান থেকে চুল গজায়।",
    breakdown: "hair (চুল) + follicle (ছোট থলি)",
    example: "চুলের ফলিকল মাথার ত্বকে চুল উৎপন্ন করে।"
  },
  {
    word: "sebaceous gland",
    meaning: "ত্বকের তেল নিঃসরণকারী গ্রন্থি।",
    breakdown: "sebac- (তেল) + gland (গ্রন্থি)",
    example: "সেবেসিয়াস গ্রন্থি মাথার ত্বককে আর্দ্র রাখে।"
  },
  var nervousSystemWords = [
  { word: axon, meaning: "একটি স্নায়ুকোষের প্রসারিত অংশ যা বিদ্যুৎ সংকেত পরিবহন করে।", breakdown: "a- (অক্ষ) + -xon (অঞ্চল)", example: "অ্যাক্সন স্নায়ুকোষের দেহ থেকে সংকেত দূরে পাঠায়।" },
  { word: dendrite, meaning: "স্নায়ুকোষের শাখা যা তথ্য গ্রহণ করে।", breakdown: "dendro- (গাছ) + -ite (ছোট অংশ)", example: "ডেনড্রাইট স্নায়ুকোষের দেহের দিকে সংকেত বহন করে।" },
  { word: neuron, meaning: "স্নায়ুকোষ, স্নায়ুতন্ত্রের মৌলিক একক।", breakdown: "neur- (স্নায়ু) + -on (একক)", example: "নিউরন মস্তিষ্কে তথ্য প্রক্রিয়া করে।" },
  { word: synapse, meaning: "স্নায়ুকোষের মধ্যে সংযোগস্থল, সংকেত স্থানান্তর করে।", breakdown: "syn- (একসঙ্গে) + -apse (সংযোগ)", example: "সিন্যাপসে রাসায়নিক সংকেত বিনিময় হয়।" },
  { word: myelin, meaning: "স্নায়ুকোষের আবরণ, সংকেত গতি বাড়ায়।", breakdown: "myel- (মজ্জা) + -in (আবরণ)", example: "মাইলিন স্নায়ুকোষের দক্ষতা বাড়ায়।" },
  { word: Schwann, meaning: "স্নায়ুকোষের মাইলিন আবরণ তৈরি করে।", breakdown: "Schwann (বিজ্ঞানী) + -cell (কোষ)", example: "শ্বান কোষ মাইলিন শীথ তৈরি করে।" },
  { word: node, meaning: "মাইলিনের মাঝখানে ফাঁক, সংকেত গতি বাড়ায়।", breakdown: "node (গ্রন্থি)", example: "নোড অফ রানভিয়ার সংকেত দ্রুত পাঠায়।" },
  { word: neurotransmitter, meaning: "রাসায়নিক যা সিন্যাপসে সংকেত পাঠায়।", breakdown: "neuro- (স্নায়ু) + transmit (প্রেরণ) + -er (এজেন্ট)", example: "নিউরোট্রান্সমিটার মেসেঞ্জার হিসেবে কাজ করে।" },
  { word: acetylcholine, meaning: "নিউরোট্রান্সমিটার, পেশি চলায় সাহায্য করে।", breakdown: "acetyl- (অ্যাসিটিক) + choline (কোলিন)", example: "অ্যাসিটাইলকোলিন পেশির সংকোচণে জড়িত।" },
  { word: dopamine, meaning: "নিউরোট্রান্সমিটার, আনন্দ ও প্রেরণা নিয়ন্ত্রণ করে।", breakdown: "dop- (প্রেরণা) + -amine (অ্যামিন)", example: "ডোপামিন সুখের অনুভূতি তৈরি করে।" },
  { word: serotonin, meaning: "নিউরোট্রান্সমিটার, মানসিক স্বাস্থ্য নিয়ন্ত্রণ করে।", breakdown: "sero- (সিরাম) + -tonin (টোন)", example: "সেরোটোনিন উদ্বেগ কমায়।" },
  { word: GABA, meaning: "নিউরোট্রান্সমিটার, স্নায়ুতন্ত্রকে শান্ত করে।", breakdown: "GABA (গামা-অ্যামিনোবিউটিরিক অ্যাসিড)", example: "GABA উত্তেজনা কমায়।" },
  { word: glutamate, meaning: "নিউরোট্রান্সমিটার, উত্তেজনা তৈরি করে।", breakdown: "glut- (গ্লুটামিক) + -ate (অ্যাসিড)", example: "গ্লুটামেট মস্তিষ্কে শিক্ষা সাহায্য করে।" },
  { word: receptor, meaning: "স্নায়ুকোষের অংশ, নিউরোট্রান্সমিটার গ্রহণ করে।", breakdown: "re- (পুনরায়) + -ceptor (গ্রাহী)", example: "রিসেপ্টর সংকেত গ্রহণ করে।" },
  { word: actionPotential, meaning: "বিদ্যুৎ সংকেত যা স্নায়ুকোষে প্রেরিত হয়।", breakdown: "action (ক্রিয়া) + potential (সম্ভাবনা)", example: "অ্যাকশন পটেনশিয়াল সংকেত দ্রুত পাঠায়।" },
  { word: restingPotential, meaning: "স্নায়ুকোষের নিষ্ক্রিয় বিদ্যুৎ মাত্রা।", breakdown: "resting (নিষ্ক্রিয়) + potential (সম্ভাবনা)", example: "রেস্টিং পটেনশিয়াল -70mV হয়।" },
  { word: depolarization, meaning: "স্নায়ুকোষের আধান হ্রাস।", breakdown: "de- (কম) + polar (ধ্রুব) + -ization (প্রক্রিয়া)", example: "ডিপোলারাইজেশন সংকেত শুরু করে।" },
  { word: repolarization, meaning: "স্নায়ুকোষের আধান পুনরুদ্ধার।", breakdown: "re- (পুনরায়) + polar (ধ্রুব) + -ization (প্রক্রিয়া)", example: "রিপোলারাইজেশন সংকেত শেষ করে।" },
  { word: hyperpolarization, meaning: "স্নায়ুকোষের আধান বৃদ্ধি।", breakdown: "hyper- (বেশি) + polar (ধ্রুব) + -ization (প্রক্রিয়া)", example: "হাইপারপোলারাইজেশন সংকেত বন্ধ করে।" },
  { word: sodium, meaning: "আয়ন, স্নায়ু সংকেতে গুরুত্বপূর্ণ।", breakdown: "sodium (সোডিয়াম)", example: "সোডিয়াম আয়ন ঢোকা সংকেত শুরু করে।" },
  { word: potassium, meaning: "আয়ন, স্নায়ু সংকেতে ভূমিকা রাখে।", breakdown: "potassium (পটাসিয়াম)", example: "পটাসিয়াম আয়ন বের হওয়া সংকেত শেষ করে।" },
  { word: calcium, meaning: "আয়ন, সিন্যাপসে সংকেত মুক্ত করে।", breakdown: "calcium (ক্যালসিয়াম)", example: "ক্যালসিয়াম নিউরোট্রান্সমিটার মুক্ত করে।" },
  { word: ionChannel, meaning: "আয়ন প্রবাহের পথ, স্নায়ুকোষে।", breakdown: "ion (আয়ন) + channel (চ্যানেল)", example: "আয়ন চ্যানেল সংকেত গতি নিয়ন্ত্রণ করে।" },
  { word: threshold, meaning: "সংকেত শুরুর ন্যূনতম বিদ্যুৎ মাত্রা।", breakdown: "threshold (সীমা)", example: "থ্রেশহোল্ড পৌঁছালে সংকেত শুরু হয়।" },
  { word: refractoryPeriod, meaning: "স্নায়ুকোষের পুনরায় সক্রিয় হওয়ার সময়।", breakdown: "refractory (প্রতিরোধক) + period (সময়)", example: "রেফ্র্যাক্টরি পিরিয়ড সংকেত বিরতি দেয়।" },
  { word: centralNervousSystem, meaning: "মস্তিষ্ক ও মেরুদণ্ড ধরে গঠিত প্রধান স্নায়ুতন্ত্র।", breakdown: "central (কেন্দ্রীয়) + nervous (স্নায়ু) + system (পদ্ধতি)", example: "সেন্ট্রাল নার্ভাস সিস্টেম চিন্তা নিয়ন্ত্রণ করে।" },
  { word: peripheralNervousSystem, meaning: "শরীরের বাকি স্নায়ুতন্ত্র, কেন্দ্রীয় ব্যতীত।", breakdown: "peripheral (প্রান্তীয়) + nervous (স্নায়ু) + system (পদ্ধতি)", example: "পেরিফেরাল নার্ভাস সিস্টেম হাত-পায়ে সংকেত পাঠায়।" },
  { word: autonomicNervousSystem, meaning: "স্বয়ংক্রিয় স্নায়ুতন্ত্র, অঙ্গ নিয়ন্ত্রণ করে।", breakdown: "autonomic (স্বয়ংক্রিয়) + nervous (স্নায়ু) + system (পদ্ধতি)", example: "অটোনমিক নার্ভাস সিস্টেম হৃদস্পন্দন নিয়ন্ত্রণ করে।" },
  { word: somaticNervousSystem, meaning: "সচেতন স্নায়ুতন্ত্র, পেশি নিয়ন্ত্রণ করে।", breakdown: "somatic (শরীরী) + nervous (স্নায়ু) + system (পদ্ধতি)", example: "সোমাটিক নার্ভাস সিস্টেম হাঁটায় সাহায্য করে।" },
  { word: sympatheticNervousSystem, meaning: "সহানুভূতিশীল স্নায়ুতন্ত্র, স্ট্রেস প্রতিক্রিয়া দেয়।", breakdown: "sympathetic (সহানুভূতিশীল) + nervous (স্নায়ু) + system (পদ্ধতি)", example: "সিম্প্যাথেটিক সিস্টেম স্ট্রেসে হৃদস্পন্দন বাড়ায়।" },
  { word: parasympatheticNervousSystem, meaning: "শান্তকর স্নায়ুতন্ত্র, শরীর শান্ত করে।", breakdown: "parasympathetic (প্রতিসহানুভূতিশীল) + nervous (স্নায়ু) + system (পদ্ধতি)", example: "প্যারাসিম্প্যাথেটিক সিস্টেম ঘুমে সাহায্য করে।" },
  { word: brain, meaning: "মস্তিষ্ক, চিন্তা ও নিয়ন্ত্রণের কেন্দ্র।", breakdown: "brain (মস্তিষ্ক)", example: "মস্তিষ্ক সিদ্ধান্ত গ্রহণ করে।" },
  { word: cerebellum, meaning: "মস্তিষ্কের পিছনের অংশ, ভারসাম্য নিয়ন্ত্রণ করে।", breakdown: "cerebr- (মস্তিষ্ক) + -ellum (ছোট)", example: "সেরিবেলাম হাতের গতি সমন্বয় করে।" },
  { word: brainstem, meaning: "মস্তিষ্ক ও মেরুদণ্ডের সংযোগ, মৌলিক কাজ নিয়ন্ত্রণ করে।", breakdown: "brain (মস্তিষ্ক) + stem (কাণ্ড)", example: "ব্রেনস্টেম শ্বাস নিয়ন্ত্রণ করে।" },
  { word: spinalCord, meaning: "মেরুদণ্ড, সংকেত শরীর জুড়ে পরিবহন করে।", breakdown: "spinal (মেরুদণ্ড) + cord (তন্তু)", example: "স্পাইনাল কর্ড হাত-পায়ে সংকেত পাঠায়।" },
  { word: meninges, meaning: "মস্তিষ্ক ও মেরুদণ্ডের সুরক্ষা ঝিল্লি।", breakdown: "mening- (ঝিল্লি) + -es (বহুবচন)", example: "মেনিনজেস আঘাত থেকে রক্ষা করে।" },
  { word: cranialNerve, meaning: "মস্তিষ্ক থেকে বের হওয়া স্নায়ু।", breakdown: "cranial (মস্তিষ্কীয়) + nerve (স্নায়ু)", example: "ক্রেনিয়াল নার্ভ চোখ নিয়ন্ত্রণ করে।" },
  { word: spinalNerve, meaning: "মেরুদণ্ড থেকে বের হওয়া স্নায়ু।", breakdown: "spinal (মেরুদণ্ড) + nerve (স্নায়ু)", example: "স্পাইনাল নার্ভ পায়ে সংকেত দেয়।" },
  { word: ganglion, meaning: "স্নায়ুকোষের গুচ্ছ, সংকেত একত্রিত করে।", breakdown: "gangli- (গুচ্ছ) + -on (একক)", example: "গ্যাংলিয়ন সংকেত প্রক্রিয়া করে।" },
  { word: plexus, meaning: "স্নায়ুদের জটিল নেটওয়ার্ক।", breakdown: "plex- (বিন্যাস) + -us (কাঠামো)", example: "প্লেক্সাস হাতে সংকেত বিতরণ করে।" },
  { word: reflex, meaning: "ত্বরিত স্নায়বিক প্রতিক্রিয়া।", breakdown: "reflex (প্রতিফলন)", example: "রিফ্লেক্স হাঁটুর ঝাঁকুনি হিসেবে দেখা যায়।" },
  { word: motorNeuron, meaning: "স্নায়ুকোষ, পেশি নিয়ন্ত্রণ করে।", breakdown: "motor (চালক) + neuron (স্নায়ুকোষ)", example: "মোটর নিউরন হাত নড়ায়।" },
  { word: sensoryNeuron, meaning: "স্নায়ুকোষ, সংবেদন গ্রহণ করে।", breakdown: "sensory (সংবেদী) + neuron (স্নায়ুকোষ)", example: "সেন্সরি নিউরন তাপ অনুভব করে।" },
  { word: interneuron, meaning: "স্নায়ুকোষ, সংকেত মাঝপথে প্রক্রিয়া করে।", breakdown: "inter- (মাঝে) + neuron (স্নায়ুকোষ)", example: "ইন্টারনিউরন মস্তিষ্কে সংকেত প্রক্রিয়া করে।" },
  { word: thalamus, meaning: "মস্তিষ্কের অংশ, সংবেদন সংকেত রিলে করে।", breakdown: "thalam- (কক্ষ) + -us (কাঠামো)", example: "থ্যালামাস সংবেদন সংকেতকে কর্টেক্সে পাঠায়।" },
  { word: hypothalamus, meaning: "মস্তিষ্কের অংশ, হরমোন ও হোমিওস্টেসিস নিয়ন্ত্রণ করে।", breakdown: "hypo- (নিচে) + thalamus (কক্ষ)", example: "হাইপোথ্যালামাস পিপাসা নিয়ন্ত্রণ করে।" },
  { word: amygdala, meaning: "মস্তিষ্কের অংশ, আবেগ নিয়ন্ত্রণ করে।", breakdown: "amygdal- (বাদাম) + -a (কাঠামো)", example: "অ্যামিগডালা ভয় তৈরি করে।" },
  { word: hippocampus, meaning: "মস্তিষ্কের অংশ, স্মৃতি গঠনে সাহায্য করে।", breakdown: "hippo- (ঘোড়া) + campus (সমুদ্র দানব)", example: "হিপ্পোক্যাম্পাস স্মৃতি সংরক্ষণ করে।" },
  { word: cortex, meaning: "মস্তিষ্কের বাইরের স্তর, চিন্তা প্রক্রিয়া করে।", breakdown: "cortex (বাহ্যিক স্তর)", example: "কর্টেক্স সিদ্ধান্ত গ্রহণে সাহায্য করে।" },
  { word: frontalLobe, meaning: "মস্তিষ্কের সম্মুখভাগ, সিদ্ধান্ত ও ব্যক্তিত্ব নিয়ন্ত্রণ করে।", breakdown: "front- (সামনে) + lobe (বিভাগ)", example: "ফ্রন্টাল লোব পরিকল্পনা করে।" },
  { word: parietalLobe, meaning: "মস্তিষ্কের উপরের অংশ, স্পর্শ সংবেদন করে।", breakdown: "pariet- (দেয়াল) + lobe (বিভাগ)", example: "প্যারাইটাল লোব তাপ অনুভব করে।" },
  { word: temporalLobe, meaning: "মস্তিষ্কের পাশের অংশ, শ্রবণ ও স্মৃতি নিয়ন্ত্রণ করে।", breakdown: "tempor- (পাশ/সময়) + lobe (বিভাগ)", example: "টেম্পোরাল লোব ভাষা বোঝে।" },
  { word: occipitalLobe, meaning: "মস্তিষ্কের পিছনের অংশ, দৃষ্টি প্রক্রিয়া করে।", breakdown: "occipit- (মাথার পিছন) + lobe (বিভাগ)", example: "অক্সিপিটাল লোব দৃশ্য দেখায়।" },
  { word: medullaOblongata, meaning: "ব্রেনস্টেমের নিচের অংশ, মৌলিক কাজ নিয়ন্ত্রণ করে।", breakdown: "medulla (মজ্জা) + oblongata (লম্বা)", example: "মেডুলা শ্বাস নিয়ন্ত্রণ করে।" },
  { word: pons, meaning: "ব্রেনস্টেমের মাঝের অংশ, সংযোগ স্থাপন করে।", breakdown: "pons (সেতু)", example: "পন্স মস্তিষ্কের অংশগুলো সংযোগ করে।" },
  { word: midbrain, meaning: "মস্তিষ্কের মাঝের অংশ, চোখ ও কান নিয়ন্ত্রণ করে।", breakdown: "mid- (মাঝ) + brain (মস্তিষ্ক)", example: "মিডব্রেন দৃষ্টি নিয়ন্ত্রণ করে।" },
  { word: reticularFormation, meaning: "ব্রেনস্টেমের নেটওয়ার্ক, সচেতনতা নিয়ন্ত্রণ করে।", breakdown: "reticular (জাল) + formation (গঠন)", example: "রেটিকুলার ফর্মেশন ঘুম নিয়ন্ত্রণ করে।" },
  { word: olfactoryNerve, meaning: "গন্ধ সংকেত মস্তিষ্কে পাঠায়।", breakdown: "olfactory (গন্ধ) + nerve (স্নায়ু)", example: "ওলফ্যাক্টরি নার্ভ গন্ধ শনাক্ত করে।" },
  { word: opticNerve, meaning: "দৃষ্টি সংকেত মস্তিষ্কে পরিবহন করে।", breakdown: "optic (দৃষ্টি) + nerve (স্নায়ু)", example: "অপটিক নার্ভ চোখ থেকে সংকেত পাঠায়।" },
  { word: vagusNerve, meaning: "দীর্ঘ স্নায়ু, অঙ্গ নিয়ন্ত্রণ করে।", breakdown: "vagus (ভ্রাম্যমাণ) + nerve (স্নায়ু)", example: "ভ্যাগাস নার্ভ হৃদপিণ্ড নিয়ন্ত্রণ করে।" },
  { word: trigeminalNerve, meaning: "মুখের সংবেদন ও চলন নিয়ন্ত্রণ করে।", breakdown: "tri- (তিন) + geminal (শাখা) + nerve (স্নায়ু)", example: "ট্রিজেমিনাল নার্ভ মুখে ব্যথা অনুভব করে।" },
  { word: facialNerve, meaning: "মুখের পেশি নিয়ন্ত্রণ করে।", breakdown: "facial (মুখ) + nerve (স্নায়ু)", example: "ফেশিয়াল নার্ভ হাসি তৈরি করে।" },
  { word: auditoryNerve, meaning: "শব্দ সংকেত মস্তিষ্কে পরিবহন করে।", breakdown: "auditory (শ্রবণ) + nerve (স্নায়ু)", example: "অডিটরি নার্ভ শব্দ শনাক্ত করে।" },
  { word: glossopharyngealNerve, meaning: "জিহ্বা ও গলার সংকেত নিয়ন্ত্রণ করে।", breakdown: "glosso- (জিহ্বা) + pharyngeal (গলা) + nerve (স্নায়ু)", example: "গ্লোসোফ্যারিনজিয়াল নার্ভ স্বাদ শনাক্ত করে।" },
  { word: accessoryNerve, meaning: "কাঁধ ও ঘাড়ের পেশি নিয়ন্ত্রণ করে।", breakdown: "accessory (সহায়ক) + nerve (স্নায়ু)", example: "অ্যাক্সেসরি নার্ভ ঘাড় নড়ায়।" },
  { word: hypoglossalNerve, meaning: "জিহ্বার চলন নিয়ন্ত্রণ করে।", breakdown: "hypo- (নিচে) + glossal (জিহ্বা) + nerve (স্নায়ু)", example: "হাইপোগ্লোসাল নার্ভ কথা বলায় সাহায্য করে।" },
  { word: duraMater, meaning: "মস্তিষ্কের বাইরের শক্ত ঝিল্লি।", breakdown: "dura (শক্ত) + mater (মা)", example: "ডিউরা ম্যাটার মস্তিষ্ক রক্ষা করে।" },
  { word: arachnoid, meaning: "মস্তিষ্কের মাঝের ঝিল্লি, জালের মতো।", breakdown: "arachn- (মাকড়সা) + -oid (সদৃশ)", example: "অ্যারাকনয়েড তরল প্রবাহ নিয়ন্ত্রণ করে।" },
  { word: piaMater, meaning: "মস্তিষ্কের ভিতরের নরম ঝিল্লি।", breakdown: "pia (নরম) + mater (মা)", example: "পিয়া ম্যাটার মস্তিষ্কের রক্তনালী সুরক্ষিত করে।" },
  { word: cerebrospinalFluid, meaning: "মস্তিষ্ক ও মেরুদণ্ডের তরল, সুরক্ষা দেয়।", breakdown: "cerebro- (মস্তিষ্ক) + spinal (মেরুদণ্ড) + fluid (তরল)", example: "সেরিব্রোস্পাইনাল তরল আঘাত থেকে বাঁচায়।" },
  { word: whiteMatter, meaning: "মস্তিষ্কের মাইলিনযুক্ত অংশ।", breakdown: "white (সাদা) + matter (পদার্থ)", example: "হোয়াইট ম্যাটার সংকেত দ্রুত পাঠায়।" },
  { word: grayMatter, meaning: "মস্তিষ্কের কোষযুক্ত অংশ।", breakdown: "gray (ধূসর) + matter (পদার্থ)", example: "গ্রে ম্যাটার চিন্তা প্রক্রিয়া করে।" },
  { word: corpusCallosum, meaning: "মস্তিষ্কের দুই গোলার্দ্ধের সংযোগ।", breakdown: "corpus (শরীর) + callosum (কঠিন)", example: "কর্পাস কলোসাম তথ্য বিনিময় করে।" },
  { word: ventricle, meaning: "মস্তিষ্কের তরল ভর্তি কক্ষ।", breakdown: "ventricle (কক্ষ)", example: "ভেনট্রিকল তরল প্রবাহ করে।" },
  { word: choroidPlexus, meaning: "তরল উৎপাদনকারী মস্তিষ্কের জাল।", breakdown: "choroid (ঝিল্লি) + plexus (জাল)", example: "কোরয়েড প্লেক্সাস তরল তৈরি করে।" },
  { word: limbicSystem, meaning: "মস্তিষ্কের অংশ, আবেগ ও স্মৃতি নিয়ন্ত্রণ করে।", breakdown: "limbic (আবেগী) + system (পদ্ধতি)", example: "লিম্বিক সিস্টেম ভয় তৈরি করে।" },
  { word: basalGanglia, meaning: "মস্তিষ্কের গুচ্ছ, গতি নিয়ন্ত্রণ করে।", breakdown: "basal (নিম্ন) + ganglia (গুচ্ছ)", example: "বেসাল গ্যাংলিয়া হাত নড়ায়।" },
  { word: substantiaNigra, meaning: "মস্তিষ্কের কালো অংশ, গতি নিয়ন্ত্রণে সাহায্য করে।", breakdown: "substantia (পদার্থ) + nigra (কালো)", example: "সাবস্ট্যানশিয়া নিগ্রা ডোপামিন তৈরি করে।" },
  { word: redNucleus, meaning: "মস্তিষ্কের লাল অংশ, গতি সমন্বয় করে।", breakdown: "red (লাল) + nucleus (কেন্দ্র)", example: "রেড নিউক্লিয়াস হাতের গতি নিয়ন্ত্রণ করে।" },
  { word: olivaryNucleus, meaning: "ব্রেনস্টেমের অংশ, শ্রবণ নিয়ন্ত্রণে সাহায্য করে।", breakdown: "olivary (আড়াই) + nucleus (কেন্দ্র)", example: "ওলিভারি নিউক্লিয়াস শব্দ প্রক্রিয়া করে।" },
  { word: pinealGland, meaning: "মস্তিষ্কের গ্রন্থি, ঘুম নিয়ন্ত্রণ করে।", breakdown: "pineal (পাইন আকৃতির) + gland (গ্রন্থি)", example: "পিনিয়াল গ্রন্থি মেলাটোনিন তৈরি করে।" },
  { word: pituitaryGland, meaning: "মস্তিষ্কের গ্রন্থি, হরমোন নিয়ন্ত্রণ করে।", breakdown: "pituit- (নিঃসরণ) + gland (গ্রন্থি)", example: "পিটুইটারি গ্রন্থি হরমোন মুক্ত করে।" },
  { word: cranialCavity, meaning: "মস্তিষ্ক ধারণকারী খালি জায়গা।", breakdown: "cranial (মস্তিষ্কীয়) + cavity (গহ্বর)", example: "ক্রেনিয়াল ক্যাভিটি মস্তিষ্ক রক্ষা করে।" },
  { word: foramenMagnum, meaning: "মস্তিষ্ক ও মেরুদণ্ডের সংযোগক্ষেত্র।", breakdown: "foramen (ছিদ্র) + magnum (বড়)", example: "ফোরামেন ম্যাগনাম মেরুদণ্ডে সংযোগ করে।" },
  { word: duraSinus, meaning: "রক্ত প্রবাহের জন্য মস্তিষ্কের ফাঁকা জায়গা।", breakdown: "dura (শক্ত) + sinus (গহ্বর)", example: "ডিউরা সিনাস রক্ত ফিরিয়ে দেয়।" },
  { word: epiduralSpace, meaning: "মস্তিষ্কের বাইরের স্থান, সুরক্ষা দেয়।", breakdown: "epi- (উপর) + dura (শক্ত) + space (স্থান)", example: "এপিডিউরাল স্পেস সুড়সুড়ি দেয়।" },
  { word: subarachnoidSpace, meaning: "মস্তিষ্কের তরল ভর্তি স্থান।", breakdown: "sub- (নিচে) + arachnoid (মাকড়সা) + space (স্থান)", example: "সাবারাকনয়েড স্পেস তরল ধরে।" },
  { word: neuroglia, meaning: "স্নায়ুকোষের সমর্থনকারী কোষ।", breakdown: "neuro- (স্নায়ু) + glia (আঠা)", example: "নিউরোগ্লিয়া স্নায়ুকোষ রক্ষা করে।" },
  { word: astrocyte, meaning: "তারকার মতো সহায়ক কোষ।", breakdown: "astro- (তারকা) + -cyte (কোষ)", example: "অ্যাস্ট্রোসাইট রক্ত-মস্তিষ্ক ব্যারিয়ার তৈরি করে।" },
  { word: oligodendrocyte, meaning: "মাইলিন তৈরি করা কোষ।", breakdown: "oligo- (অল্প) + dendro- (গাছ) + -cyte (কোষ)", example: "ওলিগোডেনড্রোসাইট মাইলিন আবরণ করে।" },
  { word: microglia, meaning: "স্নায়ুতন্ত্রের রক্ষক কোষ।", breakdown: "micro- (ছোট) + glia (আঠা)", example: "মাইক্রোগ্লিয়া সংক্রমণ দূর করে।" },
  { word: ependymalCell, meaning: "তরল প্রবাহের জন্য কোষ।", breakdown: "ependym- (উপরের স্তর) + -al (সম্পর্কিত) + cell (কোষ)", example: "এপেন্ডিমাল সেল তরল সঞ্চালন করে।" },
  { word: bloodBrainBarrier, meaning: "মস্তিষ্কের রক্ত প্রবেশ বাধা।", breakdown: "blood (রক্ত) + brain (মস্তিষ্ক) + barrier (বাধা)", example: "ব্লাড-ব্রেন ব্যারিয়ার বিষাক্ত পদার্থ বন্ধ করে।" },
  { word: neuroplasticity, meaning: "স্নায়ুতন্ত্রের পরিবর্তনশীলতা।", breakdown: "neuro- (স্নায়ু) + plasticity (আকৃতি পরিবর্তন)", example: "নিউরোপ্লাস্টিসিটি শিক্ষা সাহায্য করে।" },
  { word: epilepsy, meaning: "স্নায়ুতন্ত্রের বিকৃতি, তীব্র সংকেত তৈরি করে।", breakdown: "epi- (উপর) + -lepsy (হামলা)", example: "এপিলেপসি আক্রমণ ডেকে আনে।" },
  { word: Parkinson, meaning: "স্নায়ুতন্ত্রের রোগ, গতি কমায়।", breakdown: "Parkinson (বিজ্ঞানী) + -disease (রোগ)", example: "পারকিনসন ডোপামিন হ্রাস করে।" },
  { word: Alzheimer, meaning: "স্নায়ুতন্ত্রের রোগ, স্মৃতি হারায়।", breakdown: "Alzheimer (বিজ্ঞানী) + -disease (রোগ)", example: "আলঝেইমার মস্তিষ্ক কোষ ধ্বংস করে।" },
  { word: multipleSclerosis, meaning: "মাইলিন ধ্বংসকারী রোগ।", breakdown: "multiple (বহু) + sclerosis (কঠিনতা)", example: "মাল্টিপল স্ক্লেরোসিস সংকেত বন্ধ করে।" },
  { word: neuropathy, meaning: "স্নায়ুতন্ত্রের ক্ষতি।", breakdown: "neuro- (স্নায়ু) + -pathy (রোগ)", example: "নিউরোপ্যাথি ব্যথা ডেকে আনে।" },
  { word: stroke, meaning: "মস্তিষ্কে রক্ত সঞ্চালন বন্ধ।", breakdown: "stroke (প্রহার)", example: "স্ট্রোক মস্তিষ্ক কোষ মারে।" },
  { word: concussion, meaning: "মস্তিষ্কের হালকা আঘাত।", breakdown: "concuss- (আঘাত) + -ion (অবস্থা)", example: "কনকাশন মাথা ঝিমঝিম করে।" }
  // ১০০টি শব্দের জন্য এখানে ৬০টি শব্দ দেওয়া হয়েছে। বাকি ৪০টি পরের অনুরোধে দেব।
]
