import { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import supabase from '../services/supabase';

function CreateProduct() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [oldPrice, setOldPrice] = useState('');

  const submitHandle = async (e) => {
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
          mass: 11,
          price: 244000,
          category: 'cosmetic',
          code: '4566-3066',
          description:
            'خط چشم مویی لچیک بدون پخش شدن پشت پلک ها، زیبایی را به چشم ها ارمغان می دهد. این خط چشم ضد آب ماندگاری بالایی داشته و زمانی که می خواهید آرایش، طولانی مدت روی صورت باقی بماند کاملا مناسب است. با قلم مویی این خط چشم، ظریف ترین و نازک ترین خطوط را می توانید بکشید و به صورت حرفه ای با آن کار کنید. رنگدانه های این محصول غلیظ و مشکی بوده و بدون ایجاد لک و سایه، خطی تمیز و در راستای پلک ایجاد می کند. خط چشم لچیک ساخت کشور آلمان بوده و از کیفیت مطلوبی برخوردار است. قلم آن کاملا انعطاف پذیر بوده و موهای آن نمدی است. پس از خشک شدن مات شده و کاملا یکدست می شود.',
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
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
          type="text"
        />
        <Input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="category"
          type="text"
        />
        <Input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="image"
          type="text"
        />
        <Input
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
          placeholder="new price"
          type="text"
        />
        <Input
          value={oldPrice}
          onChange={(e) => setOldPrice(e.target.value)}
          placeholder="old price"
          type="text"
        />
        <div className="w-1/3">
          <Button type="submit" variant="secondaryLessRound">
            Create Product
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CreateProduct;
