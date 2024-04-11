import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import supabase from '../services/supabase';

function CreateProduct() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [oldPrice, setOldPrice] = useState('');

  const submitHandle = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await supabase.from('products').insert([
        {
          id: 1,
          name: 'سرم رتینول خالص 0.5 ضد چروک و جوانساز کوزارکس',
          brand: 'Cosrx The Retinol 0.5 Oil 20ml',
          brandImage: '',
          brandDescription: '',
          image: '',
          features: [''],
          tag: ['scrub', 'skin-care'],
          mass: 30,
          price: 485000,
          category: 'skin-care',
          code: '5996-4063',
          description:
            'سرم روغن رتینول ۰.۵ کوزارکس حاوی ترکیب شگفت انگیز مراقبت از پوست یعنی ۰.۵٪ رتینول پایدار خالص است که توانایی بالایی در سفت کردن پوست، کاهش چین و چروک، خواص تنظیم کننده سبوم و ضد آکنه دارد.  گیاه اسکوالن نیز در این سرم روغنی اضافه شده که به عنوان یک سپر محافظ در برابر عوامل منفی خارجی عمل می کند و به طور همزمان، ویتامین E برای کاهش آسیب های پوستی و تقویت قدرت ضد پیری این محصول وارد شده و به پوست حس لطافت و شادابی می دهد. توجه به این نکته ضروری است که افراد باردار باید از مصرف محصولات حاوی ویتامین A در دوران بارداری و شیردهی خودداری کنند.',
        },
        {
          id: 2,
          name: 'اسپری آبرسان و آرامش بخش پوست حساس سنسیلیس',
          brand: 'Sensilis The Cool Rescue',
          brandImage: '',
          brandDescription: '',
          image: '',
          features: [''],
          tag: ['hydration', 'skin-care'],
          mass: 150,
          price: 685000,
          category: 'skin-care',
          code: '5814-3970',
          description:
            'تقویت‌کننده و طراوت‌بخش برای پوست‌های حساس، واکنش‌پذیر و تحریک‌شده. تسکین دهنده، نرم کننده و حساسیت زدا، مراقبت های ضروری برای پوست های حساس را فراهم می کند. پوست را تسکین می دهد و حداکثر رطوبت، راحتی و احساس نرمی را به شما می دهد.',
        },
        {
          id: 3,
          name: 'کرم ضد افتادگی پوست اکسپرتیج آردِن',
          brand: 'Ardene Expert Age anti gravity cream 50 ML',
          brandImage: '',
          brandDescription: '',
          image: '',
          features: [
            'باز کردن خطوط و کاهش عمق چین و چروک',
            'افزایش استحکام، سفتی و انعطاف پوست',
            'ضد افتادگی قوی، جلوگیری از شل شدگی پوست',
            'مناسب صورت، گردن و دکلته',
            'مناسب انواع پوست، به جز پوست های چرب و مستعد جوش',
            'حاوی هیالورونیک اسید، شی باتر، کلاژن هیدرولیز شده و ژل آلوئه ورا',
          ],
          tag: ['anti-sagging', 'skin-care'],
          mass: 150,
          price: 595000,
          category: 'skin-care',
          code: '5700-3887',
          description:
            'کرم ضد افتادگی پوست اکسپرتیج آردن محصولی از برند ایرانی آردن است. این محصول خاصیت ضد افتادگی قوی داشته و از شل شدگی پوست جلوگیری به عمل می آورد. این کرم با بهره گیری از تکنولوژی بوتاکس، به تجدید ساختار سلولی و جوانسازی پوست کمک می نماید.',
        },
        {
          id: 4,
          name: 'کرم ضد جوش و آبرسان آیونیک',
          brand: 'iunik Ac Spot Cream',
          brandImage: '',
          brandDescription: '',
          image: '',
          features: [
            'باز کردن خطوط و کاهش عمق چین و چروک',
            'افزایش استحکام، سفتی و انعطاف پوست',
            'ضد افتادگی قوی، جلوگیری از شل شدگی پوست',
            'مناسب صورت، گردن و دکلته',
            'مناسب انواع پوست، به جز پوست های چرب و مستعد جوش',
            'حاوی هیالورونیک اسید، شی باتر، کلاژن هیدرولیز شده و ژل آلوئه ورا',
          ],
          tag: ['hydration', 'moisturizing', 'acne', 'skin-care'],
          mass: 20,
          price: 790000,
          category: 'skin-care',
          code: '5900-4004',
          description:
            'کرم ضد افتادگی پوست اکسپرتیج آردن محصولی از برند ایرانی آردن است. این محصول خاصیت ضد افتادگی قوی داشته و از شل شدگی پوست جلوگیری به عمل می آورد. این کرم با بهره گیری از تکنولوژی بوتاکس، به تجدید ساختار سلولی و جوانسازی پوست کمک می نماید.',
        },
        {
          id: 5,
          name: 'پاک کننده آرایش کنترل کننده چربی پوست چرب گارنیه',
          brand: 'Garnier Solution Micellaire Tout En 1',
          brandImage: '',
          brandDescription: '',
          image: '',
          features: [],
          tag: ['micellar-water', 'face-cleaner', 'skin-care'],
          mass: 400,
          price: 345000,
          category: 'skin-care',
          code: '5978-4045',
          description: '',
        },
        {
          id: 6,
          name: 'ژل آبرسان دورچشم سیمپل',
          brand: 'Simple Hydrating Eye Gel',
          brandImage: '',
          brandDescription: '',
          image: '',
          features: [],
          tag: ['eye-care', 'eye-cream', 'hydration', 'skin-care'],
          mass: 25,
          price: 275000,
          category: 'skin-care',
          code: '5993-4061',
          description: '',
        },
        {
          id: 7,
          name: 'محلول پاک کننده آرایش میسلار سنسی ویت ویتالیر',
          brand: 'Vitalayer Sensivit Micellar Cleansing Water 250ml',
          brandImage: '',
          brandDescription: '',
          image: '',
          features: [
            'حاوی آلانتوئین، آلوئه ورا، نیاسینامید و فاقد الکل بوده',
            'فرموله شده برای پوست های حساس',
            'پاک کنندگی ملایم و سریع و بدون نیاز به شستشو با آب',
            'کیفیت بالا، فرمولاسیون فوق العاده و استفاده از مواد اولیه با کیفیت',
            'صادر کننده مجوز سازمان غذا و دارو',
            'تنظیم PH پوست',
          ],
          tag: ['micellar-water', 'face-cleaner', 'skin-care'],
          mass: 250,
          price: 158400,
          category: 'skin-care',
          code: '5889-3993',
          description:
            'استفاده از انواع پاک کننده صورت سبب از بین رفتن آلودگی ها، مواد آرایشی و اضافه از روی پوست شده و حس سبکی و شفافیت را در پوست ایجاد می کند. با پاکسازی کامل صورت، از بسیاری از مشکلات پوستی مانند جوش، لک، آکنه و تیرگی جلوگیری خواهد شد و نرمی و لطافت به آن بازگردانده می شود. در ادامه با معرفی و بررسی مشخصات محلول پاک کننده آرایش ویتالیر مدل Sensivit با ما همراه باشید.',
        },
        {
          id: 8,
          name: 'رژگونه پودری و مات شیگلم',
          brand: 'Sheglam Love Dive Tender Heart Powder Blush',
          brandImage: '',
          brandDescription: '',
          image: '',
          features: [
            'بافت پودری، بسیار سبک و ابریشمی',
            'دارای رنگدانه های غلیظ',
            'مات',
            ' ماندگاری بالا بر روی پوست',
            'فاقد مواد حساسیت زا',
          ],
          tag: ['rouge', 'cosmetic'],
          mass: 0,
          price: 485000,
          category: 'cosmetic',
          code: '5970-4040',
          description:
            'رژ گونه پودری شیگلم در برابر رطوبت و تعریق مقاوم است و ماندگاری بالایی دارد. این محصول با فرمولاسیون گیاهی و منحصر به فرد خود به داشتن پوستی شاداب کمک می کند.',
        },
        {
          id: 9,
          name: 'پالت رژگونه شیگلم مدل Blushing Bouquet شیگلم',
          brand: 'Sheglam Blushing Bouquet Blush Palette',
          brandImage: '',
          brandDescription: '',
          image: '',
          features: [
            'دارای رنگدانه های غلیظ',
            'بافت پودری، بسیار سبک و ابریشمی',
            ' ماندگاری بالا بر روی پوست',
            'فاقد مواد حساسیت زا',
            'مات',
          ],
          tag: ['rouge', 'cosmetic'],
          mass: 0,
          price: 690000,
          category: 'cosmetic',
          code: '5969-4039',
          description:
            'پالت رژگونه FLORAL FLUSH BLUSH BLUSHING BOUQUET با شش رنگ زیبا و طبیعی به چهره شما را لطافت و درخشندگی فوق العاده ای میبخشد. این محصول با بافت پودری فشرده و ترکیب پذیری فوق العاده خود چهره شما را طراوت میبخشد. رنگ‌های این پالت رژگونه مهم ترین نقطه قوت این محصول است.Begonia: رنگ صورتی کم رنگ و ملایم، Rose: رنگ صورتی گرم، Peony: رنگ صورتی سرد با تناژ بنفش، Orchid: یک رنگ بنفش گرم، Lily: یک رنگ نارنجی گرم، Daisy: یک رنگ نارنجی سرد. همگی این رنگ ها کاملا طبیعی و این رنگ‌ها بر اساس گل‌هایی که از آن‌ها الهام گرفته شده‌اند نام‌گذاری شده‌اند. این محصول پس از استفاده به طور کامل بازیافت خواهد شد و دوستدار محیط زیست است. و این محصول از شیگلم، یک برند آرایشی محبوب و مدرن است که محصولات باکیفیت و قیمت مناسب ارائه می‌دهد.',
        },
        {
          id: 10,
          name: 'کرم پودر ضدچروک و آبرسان spf30 پرووک',
          brand: 'Provoc proxy foundation',
          brandImage: '',
          brandDescription: '',
          image: '',
          features: [
            'مناسب برای پوست چرب  و مختلط',
            'کرم پودری با ساختار کاموفلاژ و پوشش دهی فوق العاده بالا',
            'مخصوص مهمانی و حتی استفاده روزانه حاوی ضدچروک',
            'حاوی آبرسان و SPF 30  جلوگیری از اشعه های مضر آفتاب',
          ],
          tag: ['foundation', 'cosmetic'],
          mass: 0,
          price: 280000,
          category: 'cosmetic',
          code: '2969-1877',
          description:
            'تمامی کرم های این برند دارای تکنولوژی جدید عدم جذب آلودگی های محیطی بر روی پوست میباشند',
        },
        {
          id: 11,
          name: 'رژلب جامد مات Chiffon touch پیر کاردین',
          brand: 'Pierre cardin Matte Chiffon touch lipstick',
          brandImage: '',
          brandDescription: '',
          image: '',
          features: [],
          tag: ['rouge', 'cosmetic'],
          mass: 0,
          price: 365000,
          category: 'cosmetic',
          code: '5507-3738',
          description: '',
        },
        {
          id: 12,
          name: 'ریمل حجم دهنده اکستند ولوم چهارکاره کالیستا',
          brand: 'Callista Callista Extend Volume Mascara',
          brandImage: '',
          brandDescription: '',
          image: '',
          features: [
            'مژه ها را پرپشت، خوش حالت، مشکی و بلند تر نشان می دهد',
            'افزایش جذابیت چشم ها',
          ],
          tag: ['mascara', 'cosmetic'],
          mass: 11,
          price: 194000,
          category: 'cosmetic',
          code: '5367-3633',
          description:
            'ریمل اکستند ولوم کالیستا با ویژگی حجم دهندگی ، مژه ها را حجیم تر و پرپشت تر  نشان می دهد. با استفاده از این ریمل فضای خالی بین مژه ها پر شده و مژگانی بلند و  بسیار خوش حالت خواهید داشت',
        },
        {
          id: 13,
          name: 'خط چشم مویی لچیک',
          brand: 'Le chic Deep Black EyeLiner',
          brandImage: '',
          brandDescription: '',
          image: '',
          features: [
            'پوشش مات و یکدست روی چشم',
            'بدون ایجاد لکه و سایه',
            'سریع خشک شدن',
            'رنگدانه های غلیظ',
            'بافت نرم و روان',
            'ماندگاری بالا',
            'ضد آب',
          ],
          tag: ['EyeLiner', 'cosmetic'],
          mass: 10,
          price: 244000,
          category: 'cosmetic',
          code: '4566-3066',
          description:
            'خط چشم مویی لچیک بدون پخش شدن پشت پلک ها، زیبایی را به چشم ها ارمغان می دهد. این خط چشم ضد آب ماندگاری بالایی داشته و زمانی که می خواهید آرایش، طولانی مدت روی صورت باقی بماند کاملا مناسب است. با قلم مویی این خط چشم، ظریف ترین و نازک ترین خطوط را می توانید بکشید و به صورت حرفه ای با آن کار کنید. رنگدانه های این محصول غلیظ و مشکی بوده و بدون ایجاد لک و سایه، خطی تمیز و در راستای پلک ایجاد می کند. خط چشم لچیک ساخت کشور آلمان بوده و از کیفیت مطلوبی برخوردار است. قلم آن کاملا انعطاف پذیر بوده و موهای آن نمدی است. پس از خشک شدن مات شده و کاملا یکدست می شود.',
        },
        {
          id: 14,
          name: 'ماسک مو حاوی عصاره پیاز باباریا',
          brand: 'Babaria Onion Hair Mask',
          brandImage: '',
          brandDescription: '',
          image: '',
          features: [
            'حاوی عصاره پیاز',
            'محرک رشد، تقویت کننده و ضد فرسودگی مو',
            'آبرسان، تغذیه کننده و بازسازی کننده مو',
            'ضد حساسیت و ضد التهاب',
            'درخشان کننده، نرم و لطیف کننده مو',
            'جلوگیری از شکستگی و آسیب ساقه مو',
            'محافظت از مو در برابر مواد شیمیایی (رنگ مو، دکلره و ...)',
          ],
          tag: ['hair-mask', 'hair-care'],
          mass: 400,
          price: 495000,
          category: 'hair-care',
          code: '5798-3956',
          description:
            'ماسک موی تقویت کننده و ضد فرسودگی و محرک رشد باباریا مدل کبویا حاوی عصاره پیاز و مواد آنتی اکسیدان طبیعی، فنولی و فلاونوئیدها می باشد که ساقه مو را تغذیه کرده، بازسازی کننده و لطافت بخش مو می باشد. عصاره پیاز موجود در ماسک مو باباریا مدل cebolla با تحریک فولیکول های مو و بدون ایجاد حساسیت موجب افزایش رشد مو می شود.',
        },
        {
          id: 15,
          name: 'شامپو درخت چای و سرکه باباریا',
          brand: 'Babaria Tea Tree and Vinegar Shampoo',
          brandImage: '',
          brandDescription: '',
          image: '',
          features: [
            'حاوی عصاره پیاز',
            'محرک رشد، تقویت کننده و ضد فرسودگی مو',
            'آبرسان، تغذیه کننده و بازسازی کننده مو',
            'ضد حساسیت و ضد التهاب',
            'درخشان کننده، نرم و لطیف کننده مو',
            'جلوگیری از شکستگی و آسیب ساقه مو',
            'محافظت از مو در برابر مواد شیمیایی (رنگ مو، دکلره و ...)',
          ],
          tag: ['shampoo', 'hair-care'],
          mass: 700,
          price: 495000,
          category: 'hair-care',
          code: '5796-3954',
          description:
            'شامپو روغن درخت چای و سرکه از موها محافظت و مراقبت می کند. بدون بوی سرکه فرمول آن بر اساس مواد فعال طبیعی است که مو را براق می کند و آن را تمیز و سالم نگه می دارد و از مشکلات مربوط به فضاهای شلوغ مانند مدارس و مهد کودک ها جلوگیری می کند.',
        },
        {
          id: 16,
          name: 'کرم مو شی و نارگیل موهای فر اوری استرند',
          brand: 'Every Strand Simply Curls with Shea & Coconut Oil',
          brandImage: '',
          brandDescription: '',
          image: '',
          features: [
            'مناسب موهای فر',
            'غنی از آنتی‌اکسیدان با خواص جوان‌سازی مو',
            'جلوگیری از خشکی و موخوره انتهای مو',
            'تعریف فرهای زیبای منعطف و ارتجاعی',
            'حاوی روغن نارگیل و شی‌باتر خالص',
          ],
          tag: ['hair-cream', 'hair-care'],
          mass: 425,
          price: 685000,
          category: 'hair-care',
          code: '5673-3865',
          description:
            'کرم مو شی و روغن نارگیل اوری استرند (فر کننده مو) Every Strand محصولی باکیفیت، طبیعی و بسیار خوب جهت ایجاد موهایی فر، درخشان و خوش حالت می‌باشد. کرم سیمپلی کرل اوری استرند حاوی شی‌باتر و روغن نارگیل خالص است و ضمن رطوبت‌رسانی از ایجاد خشکی و موخوره در انتهای موها جلوگیری می‌کند. علاوه بر این با شکل‌دهندگی و تعریف فرهای خوش حالت و ارتجاعی موهای دوست داشتنی، درخشان و آب‌رسانی شده را به ارمغان می‌آورد. کرم موی اوری استرند دارای فرمول جذب شوندگی سریع بوده و در تمام طول روز موهای خوش حالت مان را حفظ می‌کند.',
        },
        {
          id: 17,
          name: 'کرم مو ده کاره حاوی بیوتین Vitamine & Forza گارنیه',
          brand: 'Garnier Vitamine & forza 10-in-1 hair cream',
          brandImage: '',
          brandDescription: '',
          image: '',
          features: [
            'ترمیم کننده موهای آسیب دیده',
            'تغذیه و تقویت کننده مو',
            'پرپشت کننده مو',
            'ضد ریزش',
            'براق و درخشان کننده مو',
            'نرم کننده مو',
            'محافظت کننده مو',
            'جلوگیری از آسیب مو در حین شانه کشی',
            'ضد موخوره',
            'دارای فرمولاسیون وگان',
            'بدون تست حیوانی',
          ],
          tag: ['hair-cream', 'hair-care'],
          mass: 400,
          price: 445000,
          category: 'hair-care',
          code: '5670-3861',
          description:
            'برند گارنیه در لاین محصولات Fructis خود ،کرم موهای ده کاره تولید کرده است.کرم موی 10 کاره ی گارنیه مدل Vitamine & Forza با 10 خاصیت، یک محصول مناسب برای داشتن موی سالم است. برای موهای مغذی و در عین حال تقویت شده، کرم مرطوب کننده 10 در 1 به موها نرمی فوق العاده می دهد و موها را براق و ابریشمی می کند. این محصول علاوه بر گره‌زدایی و تقویت، از دانه های مو در برابر موخره محافظت می‌کند، از آسیب‌های ناشی از شانه زدن مو جلوگیری می‌کند و آن ها را برای زمان طولانی آبرسانی می کند. این کرم حاوی ویتامین C، عصاره ی پرتقال خونی و بیوتین است. این محصول وگان و دوستدار طبیعت است.',
        },
        {
          id: 18,
          name: 'شیر موی صاف کننده و مغذی کاکائو و آووکادو اوری استرند',
          brand:
            'Every Strand Lacio Plus with Cacao Butter and Avocado Oil Leave-In Smoothing Milk',
          brandImage: '',
          brandDescription: '',
          image: '',
          features: [
            'حاوی عصاره های طبیعی باکیفیت',
            ' نگهداری رطوبت در بافت داخلی تارهای مو',
            ' صاف کننده وز موها',
            ' احیای حالت ارتجاعی و سالم موها',
            ' مناسب برای موهای مجعد، وزدار و نامنظم',
            'مدیریت پذیری آسان موها',
            ' حاوی کره کاکائو برای تغذیه و صاف کنندگی',
            ' حاوی روغن آووکادو برای حفظ رطوبت مو',
            ' حاوی شی باتر و روغن نارگیل برای تغذیه مو',
            ' احیای سلامتی موهای زیبا، خوش حالت و درخشان',
          ],
          tag: ['hair-milk', 'hair-care'],
          mass: 177,
          price: 685000,
          category: 'hair-care',
          code: '5665-3857',
          description:
            'شیر موی صاف کننده و مغذی کاکائو و آووکادوی اوری استرند Lacio Plus حاوی عصاره های طبیعی باکیفیت برای نگهداری رطوبت در بافت داخلی تارهای مو و ایجاد حالت صاف و ارتجاعی موهای مجعد، وزدار و نامنظم می باشد. شیر موی اوری استرند حاوی کره کاکائو برای تغذیه، رفع وز و صاف کنندگی حالت طبیعی موها است که با روغن آووکادو با خاصیت مغذی، حفظ شادابی، انعطاف پذیری و صاف کنندگی موها همراه شده است.این فرمول همچنین حاوی شی باتر، روغن نارگیل و پرو ویتامینB5 برای ترمیم و احیای سلامتی موهای زیبا و خوش حالت می باشد',
        },
        {
          id: 19,
          name: 'کرم کنترل کننده فر و وز مو لاکمه',
          brand: 'Lakmé Frizz Control Cream',
          brandImage: '',
          brandDescription: '',
          image: '',
          features: [
            'فرمول وگان',
            'فاقد مینرال اویل',
            'فاقد پارابن',
            'فاقد رنگ',
            ' روغن فوق العاده باکره چیا آلی.',
            'فیوژن با غلظت بالایی از اسیدهای هیالورونیک.',
            ' رطوبت شدید و درخشندگی بیشتری را در مو ایجاد می کند.',
            ' مرطوب کننده فیبرمو.',
            'نرمی را افزایش می دهد.',
            'مقاومت کننده و کاهش دهنده وز تصادفی',
          ],
          tag: ['frizz-control-cream', 'hair-care'],
          mass: 150,
          price: 681000,
          category: 'hair-care',
          code: '3901-2464',
          description:
            'الاستیک مو را فعال میکند، بسیار سبک است و موهای فر طبیعی را به ما میدهد. رطوبت شدید ، درخشندگی و نرمی را فراهم می کند. در برابر وز شدن مو محافظت می کند.',
        },
        {
          id: 20,
          name: 'اسپری ضد تعریق مردانه مدل Cool Fresh داو',
          brand: 'Dove Dove Men Cool Fresh Mans Anti Sweat Spray',
          brandImage: '',
          brandDescription: '',
          image: '',
          features: [
            'محافظت 48 ساعته در برابر عرق و بو',
            'غنی شده با کرم مرطوب کننده',
            'به پوست ظریف زیر بغل کمک می کند تا از تحریکات و  جوش های  بعد از اصلاح بهبود یابد',
            'نرم کردن پوست زیر بغل',
            'حاوی فرمول بدون الکل و گلوتن',
            'حاوی رایحه بسیار خنک',
            'بدون آزمایش حیوانی',
            'دارای خاصیت زود خشک شوندگی و بدون ایجاد لکه روی لباس و پوست است',
          ],
          tag: ['frizz-control-cream', 'body-care'],
          mass: 250,
          price: 198000,
          category: 'body-care',
          code: '5975-4042',
          description:
            'مجموعه ضد تعریق‌های مردانه Dove Men+Care،  محافظت 48 ساعته در برابر بو به شما ارائه می کند. همچنین فرمولاسیون غیر تحریک کننده آن حاوی ¼ فناوری مرطوب کننده است. این فرمولاسیون برای محافظت فعال از پوست شما طراحی شده است به همین خاطر روی عرق بدن شما تاثیر می گذارد نه روی پوست شما.اگر دوستدار رایحه های خنک و سرد هستید و به دنبال اسپری هایی  هستید که حس خنگی در پوست ایجاد می کنند، این اسپری مناسب شما تولید شده است. Dove  برای تولید محصولات خود از آزمایش های حیوانی  استفاده نمی کند. تمامی محصولات Dove دارای گواهینامه PETA بدون خشونت هستند.',
        },
        {
          id: 21,
          name: 'شامپو بدن مدل مرکبات انرژی بخش و ضد التهاب سینت ایوز',
          brand:
            'St. ives st. ives Energizing Body Wash Citrus & Cherry Blossom',
          brandImage: '',
          brandDescription: '',
          image: '',
          features: [],
          tag: ['body-wash', 'body-care'],
          mass: 650,
          price: 295000,
          category: 'body-care',
          code: '5922-4018',
          description:
            'با این شستشوی بدن برای شادابی و شادابی پوست ، تجربه دوش خود را ارتقا دهید. این ماده شستشوی بدن با 100٪ عصاره طبیعی مرکبات و شکوفه های گیلاس ، انرژی لازم را برای تقویت فوری فراهم می کند.',
        },
        {
          id: 22,
          name: 'روغن حمام سری کیت',
          brand: 'Sericate Bath Oil',
          brandImage: '',
          brandDescription: '',
          image: '',
          features: [
            'نرم کننده قوی برای خارش, حساسیت و خشکی های شدید',
            'شفاف و غیر چرب با قابلیت پخش یکنواخت در آب',
          ],
          tag: ['bath-oil', 'body-care'],
          mass: 250,
          price: 229000,
          category: 'body-care',
          code: '5786-3946',
          description:
            'یک روغن چرب با قابلیت پخش در آب می باشد که به طور اختصاصی فرموله شده است تا خارش و تحرکات ناشی از خشکی شدید پوست را کاهش دهد.',
        },
        {
          id: 23,
          name: 'رول ضد تعریق بدون آلومینیوم Carbon Protect لورال مردانه',
          brand: 'LOréal Men Expert Carbon Protect 0 % aluminium',
          brandImage: '',
          brandDescription: '',
          image: '',
          features: [],
          tag: ['anhidrotic', 'body-care'],
          mass: 250,
          price: 229000,
          category: 'body-care',
          code: '5721-3891',
          description:
            'یکی از قسمت های بدن که تجمع غدد ضد تعریق در آن زیاد است، ناحیه زیر بغل است. میزان تعریق در بدن افراد مختلف، بسته به شرایطی مانند ژنتیک و فعالیت های فیزیکی بدن متفاوت است. اما به هر حال زیر بغل قسمتی است که اغلب زیاد عرق میکند. استفاده از مام مردانه یا مام زنانه باعث می شود غدد تعریق در این ناحیه برای مدت زمان مشخصی از فعالیت باز مانده و بدن انسان تقریبا خشک بماندرول ضد تعریق مردانه لورآل مدل CARBON PROTECT علاوه بر لایه پوششی پوست ایجاد میکند و مانع موقتی عرق کردن می شود، با توجه به رایحه ای که دارد، از ایجاد بوی بد عرق در بدن نیز جلوگیری میکند این محصول دارای ماندگاری 48 ساعته میباشد.',
        },
        {
          id: 24,
          name: 'ژل شستشو بدن مدل Skin Protect+ باباریا',
          brand: 'Babaria Skin Protect+ Bath & Shower Gel',
          brandImage: '',
          brandDescription: '',
          image: '',
          features: [],
          tag: ['body-wash', 'body-care'],
          mass: 600,
          price: 396050,
          category: 'body-care',
          code: '5697-3882',
          description:
            'ژل حمام و دوش Skin Protect+ با روغن درخت چای، یک ماده طبیعی گیاهی از استرالیا با خواص دارویی بسیار شناخته شده، محافظت فعال طبیعی پوست را ارائه می دهد.',
        },
        {
          id: 25,
          name: 'ادو پرفیوم مردانه مدل Victor ژکساف',
          brand: 'Jacsaf Jacsaf Victor Eau De Parfum For Men 100ml',
          brandImage: '',
          brandDescription: '',
          image: '',
          features: [
            'نت اولیه : لیمو ترش، نارنگی ماندارین ، نارنج',
            'نت میانی : هل ، گل یاس ، سوسن',
            'نت پایه : دارچین ، عنبر ، مشک ، جوز هندی ، کهربا',
          ],
          tag: ['men-parfum', 'parfum '],
          mass: 100,
          price: 585000,
          category: 'parfum',
          code: '5756-3920',
          description:
            'به محض اینکه ادکلن ژک ساف ویکتور مردانه را روی پوست و محل نبضتان اسپری می کنید متوجه بوی لیمو ، پرتقال ماندارین و نارنج خواهید شد. این ترکیب مرکباتی و شیرین، شادی ونشاط فراوانی را در شما ایجاد می‌کند. پس از مدتی این نت‌های جای خود را به نت‌های میانی خواهند داد. نت‌های میانی از ترکیب هل، گل یاسمین و سوسن تشکیل شده اند . رایحه ی این عطر هیجان و انرژی مثبت زیادی را به شما هدیه می‌کند. پس از مدتی طولانی، این نت‌ها جای خود را به نت‌های پایانی خواهند داد. نت‌های پایانی از ترکیب دارچین، جوز هندی، عنبر و مشک تشکیل می‌شوند. این ترکیب تند و شرقی، انرژی و هیجان شما به شدت افزایش می دهد .',
        },
        {
          id: 26,
          name: 'عطر زنانه نایت ویش ادو پرفیوم ژکساف',
          brand: 'Jacsaf Night Wish Eau De Parfum For Women',
          brandImage: '',
          brandDescription: '',
          image: '',
          features: [],
          tag: ['women-parfum', 'parfum '],
          mass: 100,
          price: 585000,
          category: 'parfum',
          code: '1171-1069',
          description:
            'عطر زنانه ژک ساف نایت ویش ادو پرفیوم Jacsaf Night Wish Eau De Parfum For Women با رایحه ای شیرین و گرم مرکب از (گل، گياهان معطر، مرکبات، ميوه، وانيل) در سال 2015 توسط شرکت ژک ساف تولید و معرفی شده است. رنگ بطری عطر زنانه نایت ویش از پایین به بالا پررنگتر میشود به این معنا که با سپری شدن مدت زمان بیشتری از اسپری، رایحه غلیظ تر میشود. در ابتدای اسپری رایحه نت های پرتقال ماندارین و نارنج طراوت بخش خواهند بود، پس از مدتی نت های میانه با ترکیبی از گل رز، یاسمین و صدتومانی جایگزین نت های اولیه شده و با استشمام بوی این گلها انرژی می گیرید. در پایان مسیر بویایی عطر نایت ویش، رایحه نت های مرکب از وانیل، گیاه پاتچولی و بادام سوخته پخش میشود و شما را به اوج هیجان می رساند.',
        },
        {
          id: 27,
          name: 'عطر زنانه بلک جاسمین ادو پرفیوم ژکساف',
          brand: 'Jacsaf Black Jasmine Eau De Parfum For Women',
          brandImage: '',
          brandDescription: '',
          image: '',
          features: [],
          tag: ['women-parfum', 'parfum '],
          mass: 100,
          price: 585000,
          category: 'parfum',
          code: '1169-1067',
          description:
            'عطر زنانه ژک ساف بلک جاسمین ادو پرفیوم Jacsaf Black Jasmine Eau De Parfum For Women در سال 2015 توسط برند ایرانی ژک ساف تولید و عرضه شده است. عطر زنانه بلک جاسمین رایحه گرم و شیرینی دارد و استفاده از آن در فصل پاییز انتخاب بسیار خوبی می باشد. نت های اولیه گلابی، بادام و تمشک سیاه در ابتدای رایحه قرار گرفته اند و با بوی میوه ای و شیرین خود نشاط و طراوت بی نظیری را نصیبتان خواهند کرد. گل یاسمین و وانیل قلب رایحه را تشکیل می دهند و انرژی مثبت را به شما هدیه خواهند کرد. رایحه چوب صندل، عنبر و گیاه پاتچولی نیز در انتهای مسیر بویایی عطر بلک جاسمین در بهبود تمرکز شما نقش خواهند داشت.',
        },
        {
          id: 28,
          name: 'عطر مردانه اف 713 ادو پرفیوم ژکساف',
          brand: 'Jacsaf F713 Eau De Parfum For Men',
          brandImage: '',
          brandDescription: '',
          image: '',
          features: [],
          tag: ['men-parfum', 'parfum '],
          mass: 100,
          price: 585000,
          category: 'parfum',
          code: '1167-1065',
          description:
            'عطر مردانه ژک ساف اف 713 ادو پرفیوم Jacsaf F713 Eau De Parfum For Men رایحه ای جدید که در سال 2015 توسط شرکت ایرانی ژک ساف طراحی و عرضه شده است. عطر اف 713 بوی تند و شیرین و گرمی دارد و برای استفاده در تمامی فصول سال پیشنهاد می شود. نت های اولیه شامل پرتقال ماندارین، نارنج و نت‌های سبز می باشند. نت های میانی را فلفل سیاه، نت‌های گلی و هل تشکیل داده اند و نت های پایانی از وانیل، چوب صندل، چوب گایاک، مشک و عنبر ساخته شده اند.',
        },
      ]);
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <div className="container mt-10 max-w-lg rounded-lg border p-5 shadow">
      <h2 className="my-4 text-3xl font-bold">Create Product</h2>
      <form onSubmit={submitHandle} className="flex flex-col gap-2">
        <Input
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          placeholder="name"
          type="text"
        />
        <Input
          value={category}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCategory(e.target.value)
          }
          placeholder="category"
          type="text"
        />
        <Input
          value={image}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setImage(e.target.value)
          }
          placeholder="image"
          type="text"
        />
        <Input
          value={newPrice}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setNewPrice(e.target.value)
          }
          placeholder="new price"
          type="text"
        />
        <Input
          value={oldPrice}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setOldPrice(e.target.value)
          }
          placeholder="old price"
          type="text"
        />
        <div className="w-1/3">
          <Button onClick={() => {}} type="submit" variant="secondaryLessRound">
            Create Product
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CreateProduct;
