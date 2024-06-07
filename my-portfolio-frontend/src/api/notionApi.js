import { Client } from "@notionhq/client";

export const  getExpDatabase = async () => {
    
    const notion = new Client({auth: process.env.NOTION_API_KEY});
    const response = await notion.databases.query({
      database_id: process.env.EXP_DATABASE_ID,
    });
    //プロパティ情報
    response?.results?.map((row, index)=>{
      // 行の処理
      console.log(row);
      Object.keys(row.properties).map((cell)=>{
        const type = row.properties[cell].type
        if(type === 'date'){
          console.log(row.properties[cell][type].start);  
        }else{
          console.log(row.properties[cell][type][0].plain_text);
        }
      })
    });
};
  

  