import Image from "next/image";
import { Client } from "@notionhq/client";

export default function Home() {
  const notion = new Client({auth: process.env.NOTION_API_KEY});
  
  (async () => {
    const response = await notion.databases.query({
      database_id: process.env.EXP_DATABASE_ID,
    });
    //ページ情報
    // console.log(response);
    //プロパティ情報
    response?.results?.map((result, index)=>{
      // 行の処理
      if(result.properties?.detail?.rich_text[index]) console.log(result.properties?.detail?.rich_text[index].text.content)
    
    // console.log(response.results[0].properties.detail.rich_text[0].text.content);
  });
  })();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
     
    </main>
  );
}
