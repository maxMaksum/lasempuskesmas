import Head from 'next/head'
import React, {useContext, useEffect, useState} from 'react'
import { Store } from '../components/contex/myContext'
import { useRouter } from 'next/router'
import Headers from '../components/Headers'
import TableNew from '../components/TableNew'
import EditForm2 from '../components/EditForm2'
import Spinner from '../components/Spinner'
import FormAdd from '../components/FormAdd'

export default function Home() {
    const router = useRouter()

    
    const { showForm, showSearchOK, showAddForm, showSpinner} = useContext(Store);
    
   
    return (

        <div  className="w-full relative ">
            <Head>
                <title>PUSKESMAS LASEM</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className=''>
              <Headers myPath="/" />   
            </div>
            <div className={
            showSearchOK ?'bg-green-600 h-screen absolute left-18 top-20 space-y-4 rounded w-full z-20' :'hidden' }></div>
            
            <main className='relative flex items-center justify-center
                 w-screen px-2'>
                  
                     {showSpinner?
                     <Spinner className="z-50" /> : <TableNew />
                     }
            
                </main>
                
                <div className={showForm?'absolute top-20 m-auto left-0 right-0 z-30':'hidden'}>
                    <EditForm2/>
                </div>
                <div className={showAddForm ?'absolute top-10 m-auto left-0 right-0 z-30':'hidden'}>
                    <FormAdd/>
                </div>
                
        </div>
        
    )
} 