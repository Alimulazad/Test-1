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
  },{ word: "occipital lobe",
    meaning: "মস্তিষ্কের পিছনের অংশ, দৃষ্টি প্রক্রিয়াকরণের জন্য দায়ী।",
    breakdown: "occipit- (মাথার পিছন) + lobe (বিভাগ)",
    example: "অক্সিপিটাল লোব দৃশ্য তথ্য প্রক্রিয়া করে।",
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
    word: "eardrum",
    meaning: "কানের ঝিল্লি, যা শব্দ কম্পন গ্রহণ করে।",
    breakdown: "ear (কান) + drum (ঢাক)",
    example: "কানের ঝিল্লি শব্দ তরঙ্গে কম্পিত হয়।"
  },
  {
    word: "cochlea",
    meaning: "কানের অভ্যন্তরীণ অংশ, যা শব্দ তরঙ্গ সংবেদন করে।",
    breakdown: "cochlea (শামুক আকৃতির)",
    example: "ককলিয়া শব্দ তরঙ্গকে স্নায়বিক সংকেতে রূপান্তর করে।"
  },
  {
    word: "ossicles",
    meaning: "কানের তিনটি ক্ষুদ্র হাড়, যা শব্দ কম্পন পরিবহন করে।",
    breakdown: "oss- (হাড়) + -icle (ছোট)",
    example: "ওসিকলস শব্দ কম্পন বাড়িয়ে দেয়।"
  },
  {
    word: "malleus",
    meaning: "কানের হাড়, যা eardrum থেকে শব্দ পরিবহন করে।",
    breakdown: "malleus (হাতুড়ি)",
    example: "ম্যালিউস eardrum এর কম্পন গ্রহণ করে।"
  },
  {
    word: "incus",
    meaning: "কানের হাড়, যা malleus থেকে শব্দ পরিবহন করে।",
    breakdown: "incus (নখ)",
    example: "ইনকাস শব্দ কম্পন incus থেকে stapes-এ পাঠায়।"
  },
  {
    word: "stapes",
    meaning: "কানের হাড়, যা cochlea-তে শব্দ পরিবহন করে।",
    breakdown: "stapes (খুঁটি)",
    example: "স্টেপেস cochlea-তে কম্পন প্রেরণ করে।"
  },
  {
    word: "eustachianTube",
    meaning: "কান ও গলার মধ্যে সংযোগকারী নল, যা চাপ নিয়ন্ত্রণ করে।",
    breakdown: "Eustachian (শারীরবিদের নামে) + tube (নল)",
    example: "ইউস্টেশিয়ান টিউব কানের চাপ সমান করে।"
  },
  {
    word: "auditoryNerve",
    meaning: "কান থেকে মস্তিষ্কে শব্দ তথ্য পরিবহনকারী স্নায়ু।",
    breakdown: "audit- (শোনা) + nerve (স্নায়ু)",
    example: "অডিটরি নার্ভ শব্দ সংকেত মস্তিষ্কে পাঠায়।"
  },
  {
    word: "outerEar",
    meaning: "কানের বাইরের অংশ, যা শব্দ সংগ্রহ করে।",
    breakdown: "outer (বাইরের) + ear (কান)",
    example: "আউটার ইয়ার শব্দকে eardrum-এ পরিচালনা করে।"
  },
  {
    word: "middleEar",
    meaning: "কানের মধ্যবর্তী অংশ, যেখানে ossicles অবস্থিত।",
    breakdown: "middle (মাঝের) + ear (কান)",
    example: "মিডল ইয়ারে শব্দ কম্পন বাড়ে।"
  },
  {
    word: "innerEar",
    meaning: "কানের অভ্যন্তরীণ অংশ, যেখানে cochlea ও ভারসাম্য প্রক্রিয়া হয়।",
    breakdown: "inner (অভ্যন্তরীণ) + ear (কান)",
    example: "ইনার ইয়ার শব্দ ও ভারসাম্য নিয়ন্ত্রণ করে।"
  },
  {
    word: "pinna",
    meaning: "কানের বাইরের কার্টিলেজ, যা শব্দ দিক নির্দেশ করে।",
    breakdown: "pinna (ফ্ল্যাপ)",
    example: "পিনা শব্দকে একত্রিত করে।"
  },
  {
    word: "tympanicMembrane",
    meaning: "eardrum-এর প্রযুক্তিগত নাম, শব্দ কম্পন গ্রহণ করে।",
    breakdown: "tympanic (ঢাকের মতো) + membrane (ঝিল্লি)",
    example: "টিম্পানিক মেমব্রেন শব্দ তরঙ্গ গ্রহণ করে।"
  },
  {
    word: "semicircularCanals",
    meaning: "কানের অংশ, যা ভারসাম্য নিয়ন্ত্রণ করে।",
    breakdown: "semi- (অর্ধেক) + circular (গোলাকার) + canals (নালী)",
    example: "সেমিসারকুলার ক্যানালস মাথার গতি ট্র্যাক করে।"
  },
  {
    word: "vestibularSystem",
    meaning: "কানের অংশ, যা ভারসাম্য ও স্থান চেতনা নিয়ন্ত্রণ করে।",
    breakdown: "vestibular (ভারসাম্য) + system (পদ্ধতি)",
    example: "ভেস্টিবুলার সিস্টেম হাঁটার সময় সাহায্য করে।"
  },
  {
    word: "utricle",
    meaning: "কানের অংশ, যা জোর ও গতি সংবেদন করে।",
    breakdown: "utricle (ছোট থলি)",
    example: "ইউট্রিকল মাথার সরণ টের পায়।"
  },
  {
    word: "saccule",
    meaning: "কানের অংশ, যা উল্লম্ব গতি সংবেদন করে।",
    breakdown: "saccule (ছোট থলি)",
    example: "স্যাকুল উল্লম্ব গতি পরিমাপ করে।"
  },
  {
    word: "otolith",
    meaning: "কানের ক্যালসিয়াম ক্রিস্টাল, যা গতি সংবেদন করে।",
    breakdown: "oto- (কান) + lith (পাথর)",
    example: "ওটোলিথ ভারসাম্যে সাহায্য করে।"
  },
  {
    word: "auditoryCanal",
    meaning: "কানের বাইরে থেকে eardrum-এর মধ্যে সংযোগকারী নালী।",
    breakdown: "auditory (শ্রবণ) + canal (নালী)",
    example: "অডিটরি ক্যানাল শব্দকে eardrum-এ পাঠায়।"
  },
  {
    word: "cerumen",
    meaning: "কানের মোম, যা কানকে সুরক্ষা দেয়।",
    breakdown: "cerumen (কানের মোম)",
    example: "সেরুমেন কানের ভিতরে ধুলো প্রতিরোধ করে।"
  },
  {
    word: "tinnitus",
    meaning: "কানে শব্দ শোনার সমস্যা, যেমন ঝিঁঝি শব্দ।",
    breakdown: "tinnitus (ঝিঁঝি শব্দ)",
    example: "টিনিটাস কানে অপ্রত্যাশিত শব্দ তৈরি করে।"
  },
  {
    word: "hearingLoss",
    meaning: "শ্রবণ ক্ষমতার হ্রাস, যা শব্দ শোনার ক্ষতি করে।",
    breakdown: "hearing (শোনা) + loss (হার)",
    example: "হিয়ারিং লস বয়সের সাথে বাড়তে পারে।"
  },
  {
    word: "otoscope",
    meaning: "যন্ত্র, যা কান পরীক্ষা করে।",
    breakdown: "oto- (কান) + scope (দেখা)",
    example: "ওটোস্কোপে ডাক্তার কানের ভিতর দেখে।"
  },
  {
    word: "audiogram",
    meaning: "শ্রবণ ক্ষমতা পরীক্ষার ফলাফলের চিত্র।",
    breakdown: "audio- (শব্দ) + gram (লেখা)",
    example: "অডিওগ্রাম শ্রবণ ক্ষতির মাত্রা দেখায়।"
  },
  {
    word: "audiologist",
    meaning: "শ্রবণ বিশেষজ্ঞ, যিনি কানের সমস্যা চিকিৎসা করেন।",
    breakdown: "audio- (শব্দ) + logist (বিশেষজ্ঞ)",
    example: "অডিওলজিস্ট শ্রবণ সহায়তা সরবরাহ করেন।"
  },
  {
    word: "earwax",
    meaning: "কানের মোম, যা কানের স্বাস্থ্য রক্ষা করে।",
    breakdown: "ear (কান) + wax (মোম)",
    example: "ইয়ারওয়্যাক্স কানকে পরিষ্কার রাখে।"
  },
  {
    word: "vertigo",
    meaning: "কানের সমস্যা থেকে ঘোরাঘুরি অনুভূতি।",
    breakdown: "vertigo (ঘোর)",
    example: "ভার্টিগো মাথা ঘোরার কারণ হতে পারে।"
  },
  {
    word: "mastoid",
    meaning: "কানের পিছনের হাড়, যা সংক্রমণ হতে পারে।",
    breakdown: "mastoid (স্তনাকৃতি)",
    example: "ম্যাস্টয়েডে সংক্রমণ ব্যথা দিতে পারে।"
  },
  {
    word: "labyrinth",
    meaning: "কানের জটিল গঠন, যা শ্রবণ ও ভারসাম্য নিয়ন্ত্রণ করে।",
    breakdown: "labyrinth (ঘুরঘুটি পথ)",
    example: "ল্যাবিরিন্থ শব্দ ও ভারসাম্য প্রক্রিয়া করে।"
  },
  {
    word: "perilymph",
    meaning: "কানের তরল, যা শব্দ কম্পন পরিবহন করে।",
    breakdown: "peri- (চারপাশে) + lymph (তরল)",
    example: "পেরিলিম্ফ cochlea-তে কম্পন স্থানান্তর করে।"
  },
  {
    word: "endolymph",
    meaning: "কানের অভ্যন্তরীণ তরল, যা ভারসাম্য নিয়ন্ত্রণে সাহায্য করে।",
    breakdown: "endo- (ভিতরে) + lymph (তরল)",
    example: "এন্ডোলিম্ফ ভারসাম্যের জন্য গুরুত্বপূর্ণ।"
  },
  {
    word: "acoustic",
    meaning: "শব্দের সাথে সম্পর্কিত, বিশেষ করে কানে।",
    breakdown: "acoustic (শব্দ)",
    example: "অ্যাকোস্টিক তরঙ্গ শ্রবণে সাহায্য করে।"
  },
  {
    word: "otitis",
    meaning: "কানের সংক্রমণ, যা ব্যথা সৃষ্টি করে।",
    breakdown: "oto- (কান) + -itis (বীমারি)",
    example: "ওটাইটিস শিশুদের মধ্যে সাধারণ।"
  },
  {
    word: "cholesteatoma",
    meaning: "কানে অস্বাভাবিক ত্বক বৃদ্ধি, যা ক্ষতি করতে পারে।",
    breakdown: "chole- (প্রস্ত) + steat- (চর্বি) + -oma (বৃদ্ধি)",
    example: "কোলেস্টিয়াটোমা কানের হাড়ে ক্ষতি করতে পারে।"
  },
  {
    word: "otosclerosis",
    meaning: "কানের হাড়ের অস্বাভাবিক কঠিনতা, যা শ্রবণ কমায়।",
    breakdown: "oto- (কান) + scler- (কঠিন) + -osis (অবস্থা)",
    example: "ওটোস্ক্লেরোসিস শ্রবণ ক্ষতি সৃষ্টি করে।"
  },
  {
    word: "hearingAid",
    meaning: "যন্ত্র, যা শ্রবণ ক্ষতি পূরণ করে।",
    breakdown: "hearing (শোনা) + aid (সাহায্য)",
    example: "হিয়ারিং এড শব্দ বাড়িয়ে দেয়।"
  },
  {
    word: "decibel",
    meaning: "শব্দের তীব্রতা মাপার একক।",
    breakdown: "decibel (শব্দ একক)",
    example: "ডেসিবেল ০ থেকে ১২০ পর্যন্ত পরিমাপ করে।"
  },
  {
    word: "frequency",
    meaning: "শব্দ তরঙ্গের ঘনত্ব, যা পিচ নির্ধারণ করে।",
    breakdown: "frequency (ঘনত্ব)",
    example: "ফ্রিকোয়েন্সি উচ্চ পিচ তৈরি করে।"
  },
  {
    word: "pitch",
    meaning: "শব্দের উচ্চতা বা নিম্নতা।",
    breakdown: "pitch (স্বর)",
    example: "পিচ গানের সুর নির্ধারণ করে।"
  },
  {
    word: "amplitude",
    meaning: "শব্দ তরঙ্গের তীব্রতা, যা ভলিউম নির্ধারণ করে।",
    breakdown: "amplitude (আমানত)",
    example: "অ্যামপ্লিচুড বেশি হলে শব্দ জোরালো হয়।"
  },
  {
    word: "soundWave",
    meaning: "শব্দের তরঙ্গ, যা কানে গ্রহণ করা হয়।",
    breakdown: "sound (শব্দ) + wave (তরঙ্গ)",
    example: "সাউন্ড ওয়েভ কানে শ্রবণ হয়।"
  },
  {
    word: "resonance",
    meaning: "শব্দের প্রতিধ্বনি, যা শ্রবণে প্রভাব ফেলে।",
    breakdown: "resonance (প্রতিধ্বনি)",
    example: "রেজোন্যান্স কানে শব্দ বাড়ায়।"
  },
  {
    word: "earInfection",
    meaning: "কানে সংক্রমণ, যা ব্যথা ও শ্রবণ ক্ষতি করতে পারে।",
    breakdown: "ear (কান) + infection (সংক্রমণ)",
    example: "ইয়ার ইনফেকশন ঔষধে চিকিৎসা করা যায়।"
  },
  {
    word: "perforation",
    meaning: "eardrum-এর ফুটো, যা শ্রবণে সমস্যা সৃষ্টি করে।",
    breakdown: "perforation (ফুটো)",
    example: "পারফরেশন শ্রবণ ক্ষতি ঘটাতে পারে।"
  },
  {
    word: "ototoxicity",
    meaning: "ঔষধ বা রাসায়নিক যা কানের ক্ষতি করে।",
    breakdown: "oto- (কান) + toxicity (বিষাক্ততা)",
    example: "ওটোটক্সিসিটি কানের স্নায়ু নষ্ট করতে পারে।"
  },
  {
    word: "audiometry",
    meaning: "শ্রবণ ক্ষমতা পরীক্ষার পদ্ধতি।",
    breakdown: "audio- (শব্দ) + metry (মাপ)",
    example: "অডিওমেট্রি শ্রবণ পরীক্ষা করে।"
  },
  {
    word: "impedance",
    meaning: "শব্দ তরঙ্গের প্রতিরোধ, যা শ্রবণ প্রভাবিত করে।",
    breakdown: "impedance (প্রতিরোধ)",
    example: "ইম্পিডেন্স শব্দ সংক্রমণে বাধা দেয়।"
  }
];

