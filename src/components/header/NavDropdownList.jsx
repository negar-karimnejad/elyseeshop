import React from "react";
import { Link } from "react-router-dom";
import Divider from "../Divider";

const data = [
  {
    id: "مراقبت از پوست",
    list: [
      [
        "مراقبت پوست",
        "کرم روز و شب",
        "ضد آفتاب",
        "ماسک و اسکراب",
        "لایه بردار",
        "اسپری آبرسان",
        "محصولات درمانی پوست",
        "ضد چروک و لیفت",
        "مرطوب کننده و آبرسان",
        "ضد لک روشن کننده",
        "ویتامین سی",
        "ضد جوش",
        "مکمل های پوستی",
      ],
      [
        "مراقبت از چشم",
        "ضد چروک دور چشم",
        "مرطوب کننده دور چشم",
        "روشن کننده دور چشم",
        "ضد پف",
        "ماسک دور چشم",
        "تقویت کننده مژه و ابرو",
      ],
      [
        "پاک کننده های صورت",
        "پاک کننده آرایش صورت",
        "پاک کننده آرایش چشم",
        "ژل شستشوی صورت",
        "دستمال مرطوب",
        "تونر",
        "فوم شستشوی صورت",
        "پن شستشوی صورت",
      ],
      [
        " ابزار جانبی پوست",
        "پیلینگ",
        "فیس براش دستی",
        "چسب بینی",
        "پد و اسفنج پاک کننده",
        "گوش پاک کن",
        "میکرودرم خانگی",
      ],
    ],
  },
  {
    id: "لوازم آرایشی",
    list: [
      [
        "آرایش صورت",
        "کرم پودر",
        "پنکیک",
        "رژگونه",
        "بی بی کرم و سی سی کرم",
        "هایلایتر و لوازم کانتورینگ",
        "فیکساتور آرایشی",
        "برنزه کننده صورت",
        "کانسیلر",
        "موس صورت",
      ],
      [
        "آرایش چشم",
        "سایه چشم",
        "ریمل",
        "خط چشم",
        "مداد چشم",
        "پرایمر چشم",
        "لنز رنگی",
        "مژه مصنوعی",
      ],
      ["آرایش ابرو", "مداد ابرو", "سایه ابرو", "ریمل ابرو", "صابون ابرو"],
      ["آرایش لب", "خط لب", "رژ لب مایع", "بالم لب", "تینت لب"],
      [
        "آرایش ناخن",
        "ناخن گیر",
        "وسایل طراحی ناخن",
        "لاک ناخن",
        "لاک پاک کن",
        "محصولات مراقبت از ناخن",
        "ست پدیکور و مانیکور",
        "ناخن مصنوعی",
        "چسب ناخن مصنوعی",
        "سوهان ناخن",
      ],
      [
        "ابزار آرایش",
        "چسب مژه",
        "کیف لوازم آرایش",
        "براش آرایشی",
        "پد آرایشی",
        "آینه آرایشی",
        "تراش آرایشی",
        "تیغ ابرو و موچین",
        "قیچی ابرو",
        "فرمژه",
      ],
    ],
  },
  {
    id: "مراقبت از مو",
    list: [
      [
        "لوازم رنگ مو",
        "رنگ ابرو",
        "رنگ مو",
        "رنگ ساژ و شامپو",
        "رنگ پودر، ریمل و کانسیلر",
        "رنگ موکیت",
        "رنگ مودکلرها",
        "اکسیدان و انواع سیویون",
      ],
      [
        "بهداشت و مراقبت مو",
        "مکمل‌های مو",
        "کرم مو",
        "روغن مو",
        "سرم مو",
        "ماسک مو",
        "نرم کننده مو",
        "شامپو مو",
        "برس و شانه مو",
        "اسپری مو",
      ],
      ["حالت دهنده مو", "واکس مو", "ژل مو", "اسپری نگهدارنده مو", "موس مو"],
    ],
  },
  {
    id: "محصولات بدن",
    list: [
      [
        "مراقبت از بدن",
        "کرم دست",
        "کرم پا",
        "برنزه کننده بدن",
        "ضد آفتاب بدن",
        "روغن بدن",
        "اسکراب بدن",
        "لوسیون بدن",
        "پن و صابون",
        "شامپو بدن",
        "محصولات کودک",
      ],
      [
        "ضد تعریق و دئودورانت",
        "اسپری و بادی اسپلش",
        "رول ضد تعریق و مام",
        "کرم ضد تعریق",
        "اسپری ضد تعریق",
        "استیک ضد تعریق",
      ],
      [
        "اصلاح صورت و بدن",
        "موبر و اپیلاسیون",
        "تیغ اصلاح",
        "افترشیو",
        "فوم اصلاح",
        "ژل اصلاح",
      ],
      [
        "بهداشت شخصی",
        "ماسک تنفسی",
        "خمیر دندان",
        "دهان شویه",
        "مسواک",
        "نوار بهداشتی",
        "ژل بهداشتی بانوان",
        "ژل بهداشتی آقایان",
        "کاندوم",
        "استرس مسافرتی",
      ],
    ],
  },
  {
    id: "عطر و ادکلن",
    list: [
      ["عطر و ادکلن", "عطر زنانه", "عطر مشترک", "عطر مردانه", "بادی اسپلش"],
      ["غلظت", "اکستریت پرفیوم", "پرفیوم", "ادو پرفیوم", "ادو تویلت", "ادوکلن"],
      ["نوع رایحه", "شیرین", "تلخ", "گرم", "خنک", "ملایم"],
    ],
  },
];

function NavDropdownList({ id }) {
  return (
    <div className="bg-white absolute top-11 border -right-40 shadow p-5 min-w-max flex gap-10">
      {data.map(
        (d) =>
          d.id === id &&
          d.list.map((l) => (
            <ul className="flex flex-col gap-1">
              {l.map((item, index) => (
                <li key={index}>
                  <Link
                    to=""
                    className={`text-base  ${
                      index === 0 ? "text-pink-500 font-yekanB" : "pr-2"
                    }`}
                  >
                    {index === 0 && (
                      <Divider className="border-r pl-2 border-dashed border-pink-500" />
                    )}
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          ))
      )}
    </div>
  );
}

export default NavDropdownList;
