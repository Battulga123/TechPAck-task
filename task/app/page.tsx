import Link from "next/link";

export default function Home() {
  return (
    <section className=" relative bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">
        <figure className="mt-10">
          <blockquote className="text-center lg:text-xl font-semibold leading-8 text-gray-900 sm:text-sm mb-6">
            <p>
              “TechPack нь MCS группийн дотоод хөгжүүлэлтийн Software House
              бөгөөд худалдааны зах зээлийн дэд бүтцийг дараагийн шатанд нь
              авчирч буй та бүгдийн сайн мэдэх PickPack, FreshPack болон
              MeatPack платформуудыг хөгжүүлээд буй компани билээ. Бид Стартап
              компанийн илэрхийлэл болсон бүтээлч сэтгэлгээ, хурдацтай хөгжил,
              баг хамт олны эв нэгдлийг мөрдлөг болгон ажиллаж буй залуу хамт
              олон. Хэрэв шинэ санал санаачлагыг дэмжин ажилладаг хөндлөн
              тогтолцоотой компани яаж ажилладаг талаар сонирхож байвал бидэнтэй
              нэгдээрэй”
            </p>
          </blockquote>
        </figure>
        <button className="rounded-3xl bg-indigo-600 p-4 text-md  text-white shadow-md hover:bg-indigo-500 ">
          <Link href="/UserPage">Бидэнтэй нэгдэх</Link>
        </button>
      </div>
    </section>
  );
}
