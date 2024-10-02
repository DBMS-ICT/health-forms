// src/i18n/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
            title: "Health Form",
       "Health Form": "Health Form",
       "User Information": "User Information",
       "FullName":"FullName",
       "Date Of Birthday": "Date Of Birthday",
          "Gender": "Gender",
          "Blood Group": "Blood Group",
          "Identify any illnesses you've had or are currently?": "Identify any illnesses you've had or are currently?",
          "If there is any problem please explain": "If there is any problem please explain",
          "Do you have a sensitivity to it?": "Do you have a sensitivity to it?",
          "If yes please specify it": "If yes please specify it",
          "Write down the name of each medication you are currently taking": "Write down the name of each medication you are currently taking",
          "Any surgery or injuries that have occurred": "Any surgery or injuries that have occurred",
          "Do you use glasses or lenses?": "Do you use glasses or lenses?",
          "Do you have any hearing problems?": "Do you have any hearing problems?",
          "Submit": "Submit",
          "Male":"Male",
          "Female":"Female",
          "Yes":"Yes",
          "No":"No",
          "Medication":"Medication",
          "Food":"Food",
          "Something else":"Something else",
          "options": "options",
          "The Disease of the Heart":"The Disease of the Heart",
          "Blood Pressure":"Blood Pressure",
          "Diabetes":"Diabetes",
          "Bones and Joints":"Bones and Joints",
          "Kidney Disease":"Kidney Disease",
          "Liver Disease":"Liver Disease",
          "Mental Illness":"Mental Illness",
          "Weight":"Weight",
          "Height":"Height"


         
     
        }
      },
      ku: {
        translation: {
            title: "فۆرمی تەندروستی",
            "Health Form": "فۆرمی تەندروستی",
            "User Information": "زانیاری کەسی",
            "FullName":"ناوی تەواو",
            "Date Of Birthday": "بەرواری لەدایکبون",
          "Gender": "رەگەز",
          "Blood Group": "گروپی خوێن",
          "Identify any illnesses youve had or are currently?": "تکایە هەرنەخۆشەک کە هەتبوە یان ئێستا هەتە دیاری بکە",
          "If there is any problem please explain": "ئەگەر هیچ کام لەمانەهەیە تکایە ڕوونکردنەوە بدە",
          "Do you have a sensitivity to it?": "ئایا هیچ هاستیارییەکت هەیە بۆ",
          "If yes please specify it": "ئەگەر بەڵێ تکایە دیاری بکە",
          "wrire down the name of each medication you are currently taking": "ناوی هەردەرمانێک کە ئێستا بەکاری دەهێنیت بنوسە",
          "Any surgery or injuries that have occurred": "هەر نەشتەرگەری یان برینداری گرنگ کەڕوویداوە ",
          "Do you use glasses or lenses?": "ئایە چاوەیلکە یان عەدەسە بەکاردەهێنیت؟ ",
          "Do you have any hearing problems?": "ئایە هیچ کەشەیەکی بیستنت هەیە؟",
          "Submit": "ناردن",
          "Male":"نێر",
          "Female":"مێ",
          "Yes":"بەڵێ",
          "No":"نەخێر",
          "Medication":"دەرمان",
          "Food":"خواردن",
          "Something else":"شتی تر",
           "options":"دیاری بکە",
           "The Disease of the Heart":"نەخۆشی دڵ",
          "Blood Pressure":"پەستانی خوێن",
          "Diabetes":"شەکرە",
          "Bones and Joints":"ئسکو جومگە",
          "Kidney Disease":"نەخۆشی گورجەلە",
          "Liver Disease":"نەخۆشی جگەر",
          "Mental Illness":"نەخۆشی دەرونی",
           "Weight":"کێش",
          "Height":"باڵا"
        }
      },
      ar:{
        translation: {
          title: "استمارة صحية",
          "Health Form": "استمارة صحية",
          "User Information": "معلومات المستخدم",
          "FullName":"الاسم الكامل",
          "Date Of Birthday": "تاريخ الميلاد",
             "Gender": "جنس",
             "Blood Group": "فصيلة الدم",
             "Identify any illnesses youve had or are currently?": "حدد أي أمراض أصبت بها أو تعاني منها حاليًا؟",
             "If there is any problem please explain": "إذا كان هناك أي مشكلة يرجى التوضيح",
             "Do you have a sensitivity to it?": "هل لديك حساسية تجاهها؟",
             "If yes please specify it": "إذا كانت الإجابة بنعم يرجى تحديدها",
             "wrire down the name of each medication you are currently taking": "اكتب اسم كل دواء تتناوله حاليًا",
             "Any surgery or injuries that have occurred": "أي عملية جراحية أو إصابات حدثت",
             "Do you use glasses or lenses?": "هل تستخدم النظارات أو العدسات؟",
             "Do you have any hearing problems?": "هل لديك أي مشاكل في السمع؟",
             "Submit": "Submit",
             "Male":"ذكر",
             "Female":"أنثى",
             "Yes":"نعم",
             "No":"لا",
             "Medication":"دواء",
             "Food":"طعام",
             "Something else":"شيء آخر",
             "options": "خيارات",
             "The Disease of the Heart":"مرض القلب",
             "Blood Pressure":"ضغط الدم",
             "Diabetes":"السكري",
             "Bones and Joints":"العظام والمفاصل",
             "Kidney Disease":"مرض كلوي",
             "Liver Disease":"أمراض الكبد",
             "Mental Illness":"المرض العقلي",
             "Submit":"ارسال",
              "Weight":"ثقل",
              "Height":"ارتفاع"




        }


      }
    },
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // React already does escaping
    }
  });

export default i18n;
