// import Form from '@/app/Employee/empcreate';
// import Breadcrumbs from '@/app/Employee/breadcrumbs';
// import { getEmps } from '@/app/lib/data';
 
// export default async function Page() {
//   const emp = await getEmps();
 
//   return (
//     <main>
//       <Breadcrumbs
//         breadcrumbs={[
//           { label: 'Invoices', href: '/Employee/create' },
//           {
//             label: 'Create Invoice',
//             href: '/Employee/create',
//             active: true,
//           },
//         ]}
//       />
//       <Form emp={emp} />
//     </main>
//   );
// }


import Form from '@/app/Employee/empcreate';
import Breadcrumbs from '@/app/Employee/breadcrumbs';
import { getEmps } from '@/app/lib/data';
 
export default async function Page() {
  const Emps = await getEmps();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/Employee/create' },
          {
            label: 'Create Invoice',
            href: '/Employee/create',
            active: true,
          },
        ]}
      />
      <Form Emps={Emps} />
    </main>
  );
}