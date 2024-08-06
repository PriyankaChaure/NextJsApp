import Form from '@/app/Employee/empedit';
import Breadcrumbs from '@/app/Employee/breadcrumbs';
import { getEmps, fetchInvoiceById } from '@/app/lib/data';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [invoice, customers] = await Promise.all([
        fetchInvoiceById(id),
        getEmps(),
    ]);

    if (!invoice) {
        notFound();
    }

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Invoices', href: `/Employee/${id}/edit` },
                    {
                        label: 'Edit Invoice',
                        href: `/Employee/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form invoice={invoice} customer={customers} />
        </main>
    );
}
