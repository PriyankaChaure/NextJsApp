'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
export default function Search({placeholder}:{placeholder:string})
{
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();
    const handleSearch = useDebouncedCallback((term:string) =>
    {
        console.log(`Searching... ${term}`);
        const param = new URLSearchParams(searchParams);
        param.set('page','1');
        if(term)
        {
            param.set('query', term);
        }
        else
        {
            param.delete('query');
        }
        replace (`${pathname}?${param.toString()}`)
        console.log(term);
    },300);
    return(
        <>
        <div className="search-container">
             <label>Search:</label>
             <input  placeholder="Search Employee Here..." className="search-input" type="text" onChange={(e)=>{
                handleSearch(e.target.value);
             }} defaultValue={searchParams.get('query')?.toString()}/>
        </div>

        </>
    );
}


