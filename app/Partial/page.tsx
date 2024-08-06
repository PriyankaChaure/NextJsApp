

import { Suspense } from "react";
import TableSkeleton from "../skeletons/tableskeleton";
import Pets from '../Pets/page';
export default function Partial()
{
  return (
    <>
    <div className="bg-red-100 justify-center flex mt-8">
    Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.

    Under the hood, Next.js also abstracts and automatically configures tooling needed for React, like bundling, compiling, and more. This allows you to focus on building your application instead of spending time with configuration.

    Whether you're an individual developer or part of a larger team, Next.js can help you build interactive, dynamic, and fast React applications.
    </div>
    <div>
    <Suspense fallback={<TableSkeleton/>}>
                <Pets/>
            </Suspense>
    </div>
    </>
  );
}