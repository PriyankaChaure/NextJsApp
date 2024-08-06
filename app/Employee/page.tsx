
import React, { Component, Suspense } from 'react';
import Table from "./table";
import TableSkeleton1 from '../skeletons/tableskeleton1';
import { fetchInvoicesPages } from '../lib/data';
import Pagination from './Pagination';
import { getEmps } from '../lib/data';


export default async function Page(
    {
        searchParams,
    }
    :
    {
        searchParams?:{
            query?:string,
            page?:string
        }
    }){
    const query = searchParams?.query || '';
    const currentpage = Number(searchParams?.page) || 1;
    const Details = await getEmps();
    const totalPages = await fetchInvoicesPages(query);
        return (
        <>
            <Suspense fallback={<TableSkeleton1/>}>
              
                <Table query={query} currentPage={currentpage}/>
                
            </Suspense>
            <div className='justify-center flex'>
                <Pagination totalPages={totalPages}/>
            </div>
           
        </>
    );
}