import query from '@/app/dbconfig';
import { dto } from '@/interfaces/dto';

const store = async (dataArr: dto[]) => {
  await Promise.all(dataArr.map(async (data) => {
    const sql = 'INSERT INTO Notice (title, content, writer, date, url, provider, categoryId) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const args = [
      data.title,
      data.content,
      data.writer,
      data.writtenDate,
      data.page.url,
      data.page.provider,
      data.page.categoryId,
    ];
    await query(sql, args);
    console.log(`stored: ${data.title}`);
  }));
};

export default store;
