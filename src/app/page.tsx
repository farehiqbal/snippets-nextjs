import { db } from '../db';
import Link from 'next/link';

export default async function Home() {

  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map(snippet => {
    return (
    <Link key={snippet.id}
      href={`/snippets/${snippet.id}`}
      className="flex justify-between items-center p-4 border rounded border-gray-200 rounded-md space-x-4"
    >

    <div> {snippet.title}</div>
    <div>View</div>
    </Link>
    );
  });


  return (
    <div>
      <div className='flex m-2 p-4 justify-between items-center'>
      <h1 className="text-2xl font-bold ">Snippets</h1>
      <Link href='/snippets/new' className='border p-2 rounded'>New</Link>
      </div>
      <div className="container mx-auto p-4">
        
        <div className="mt-4 space-y-4">{renderedSnippets}</div>
      </div>

    </div>
  );
}
