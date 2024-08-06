'use server';
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { sql } from "@vercel/postgres";
import { z } from 'zod';
import { signIn } from "../auth";
//import {AuthError} from "next-auth";




const formSchema = z.object({
    employeeid: z.string({
      invalid_type_error:'Please enter employee id',
    }),
    employeename: z.string({
      invalid_type_error:'Please enter employee name',
  }),
  employeeaddress : z.string({
      invalid_type_error:'please enter employee address',
    }),
    employeesalary: z.string({
      invalid_type_error:'please enter employee salary',
    }),
    employeeemailid : z.string({
        invalid_type_error:'please enter employee emailid',
      }),
      employeemobileno: z.string({
        invalid_type_error:'please enter employee mobileno',
      }),
  });

  export type State = {
    errors?:{
      employeeid?:string[];
      employeename?:string[];
      employeeaddress?:string[];
      employeesalary?:string[];
      employeeemailid?:string[];
      employeemobileno?:string[];
    };
    message?: string | null;
  }
  const createDetails = formSchema;
export default async function addEmployee(prevState:State,formdata: FormData) {

   
    //without zod
    // const employeeid = formdata.get('employeeid')?.toString();
    // const employeename = formdata.get('employeename')?.toString();
    // const employeeaddress = formdata.get('employeeaddress')?.toString();
    // const employeesalary = formdata.get('employeesalary')?.toString();
    // const employeeemailid = formdata.get('employeeemailid')?.toString();
    // const employeemobileno = formdata.get('employeemobileno')?.toString();   


    const validated_fields =  createDetails.safeParse({
        employeeid: formdata.get("employeeid"),
        employeename: formdata.get("employeename"),
        employeeaddress: formdata.get("employeeaddress"),
        employeesalary: formdata.get("employeesalary"),
        employeeemailid: formdata.get("employeeemailid"),
        employeemobileno: formdata.get("employeemobileno"),
      });
  
      if(!validated_fields.success){
        return{
          errors : validated_fields.error.flatten().fieldErrors,
          message:'Missing Fields, Failed to add employee',
        }
      }
      const { employeeid, employeename, employeeaddress, employeesalary, employeeemailid, employeemobileno} = validated_fields.data;
    try {
      
        await sql`
            INSERT INTO employee (
                employeeid, employeename, employeeaddress, employeesalary, employeeemailid, employeemobileno
            ) VALUES (
                ${employeeid}, ${employeename}, ${employeeaddress}, ${employeesalary}, ${employeeemailid}, ${employeemobileno}
            );
        `;
    } catch (error) {
        console.error('Database Error:', error);
        return {
            message: 'Database Error: Failed to Add Employee Details',
        };
    }

   
    revalidatePath("/Employee");
    redirect("/Employee");
}


const editDetails = formSchema;

export async function updateEmployee(id: string, formData: FormData) {
  // const employeeid = formData.get("employeeid") || '';
  // const employeename = formData.get("employeename") || '';
  // const employeeaddress = formData.get("employeeaddress") || '';
  // const employeesalary = formData.get("employeesalary") || '';
  // const employeeemailid = formData.get("employeeemailid") || '';
  // const employeemobileno = formData.get("employeemobileno") || '';

  const {employeeid,employeename,employeeaddress,employeeemailid,employeesalary,employeemobileno} = editDetails.parse({
    employeeid : formData.get("employeeid"),
    employeename : formData.get("employeename"),
    employeeaddress : formData.get("employeeaddress"),
    employeesalary : formData.get("employeesalary"),
    employeeemailid : formData.get("employeeemailid"),
    employeemobileno : formData.get("employeemobileno")
  });

  try { 
    await sql`UPDATE employee SET 
      employeeid = ${employeeid}, 
      employeename = ${employeename}, 
      employeeaddress = ${employeeaddress}, 
      employeesalary = ${employeesalary}, 
      employeeemailid = ${employeeemailid}, 
      employeemobileno = ${employeemobileno} 
      WHERE employeeid = ${employeeid};`;
  } 
  catch (error) 
  {
    console.error("Database Error: Failed to Update Details", error);
    return {  message: 'Database Error: Failed to Update Details' };
  }
  
  revalidatePath("/Employee");
  redirect("/Employee");
}



export async function deleteEmployee(id:string)
{
 // throw new Error('Failed to Delete Invoice');
  try
  {
    await sql `DELETE FROM employee WHERE employeeid = ${id};`;
  }
  catch(error)
  {
    return{
      message:'Database Error : Failed to Delete Details',
    }
  }
  revalidatePath('/Employee');
 

}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    // console.log(formData);
    await signIn('credentials', formData);
  } catch (error) {
    if (error && error.message) {
      
      if (error.message.includes('CredentialsSignin')) {
        return 'Invalid credentials.';
      }
      return 'Something went wrong.';
    }
    throw error;
  }
}
