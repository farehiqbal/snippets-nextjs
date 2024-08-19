import { db } from "../../../db";
import { redirect } from "next/navigation";
export default function SnippetCreatePage(){

    async function createSnippet(formData: FormData){
        // make sure its a server action
        'use server'
        
        // check inputs
        const title = formData.get('title') as string;
        const code = formData.get('code') as string;
       // crate a record in database
        await db.snippet.create({
            data: {
                title,
                code
            }
        });
        console.log('Snippet created');

       // recdirect to home page
       redirect('/'); 

    }


    return (
    <form action={ createSnippet }>
        <h3 className="font-bold m-3">Create a Snippet</h3>
        <div className="flex flex-col gap-4">
            <div className="flex gap-4">
                <label className="w-12" htmlFor="title">
                    Title
                </label>
                <input name="title" className="border rounded p-2 w-full" 
                id="title" />
            </div>

            <div className="flex gap-4">
                <label className="w-12" htmlFor="code">
                    Code
                </label>
                <textarea name="code" className="border rounded p-2 w-full" 
                id="code" />
            </div>
        </div>

        <button className="bg-blue-500 text-white p-2 rounded m-3">
            Create Snippet
        </button>

    </form>
    );
}