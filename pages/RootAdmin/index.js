import Layout from '@/Components/Layout';
import React from 'react';
import client from 'apollo-client';

const RootAdmin = () => {

    const handleSubmit = async (e) => {
        // const {data,errors,loading}=await client.mutate{[]}
    }
    return (
        <div className='container'>
            <div className='row my-3 justify-content-center align-items-center'>
                <form className='col-12 col-xl-5 col-lg-5 bg-success my-3 p-4 rounded shadow'>
                    <div className='col-12'>
                        <label htmlFor='email'>EMail</label>
                        <input type="email" className='form-control' name="email" id="email" placeholder='E-Posta Adresinizi Giriniz...' required />
                    </div>
                    <div className='col-12 my-3'>
                        <label htmlFor='password'>Password</label>
                        <input type="password" className='form-control' name="password" id="password" placeholder='Şifrenizi Giriniz...' required />
                    </div>
                    <div className='col-12'>
                        <button type='submit' className='btn btn-primary float-end w-25'>Giriş</button>
                    </div>
                </form>
            </div>
        </div>

    );
}
export default RootAdmin;