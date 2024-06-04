'use client'
import { list } from 'postcss';
import React, { InputHTMLAttributes, useRef, useState } from 'react';
interface ListCategory {
    name: string;
    configurations: string[];
}
const Page = () => {
    const [categories, setCategories] = useState<ListCategory[]>([]);
    const [category, setCategory] = useState('');
    const [configurations, setConfigurations] = useState<string[]>([]);
    const [configurationName, setConfigurationName] = useState('');
    const CategoryInput = useRef<any>();
    const configurationInput = useRef<any>();
    const handleInputConfigurationName = (value: string) => {
        setConfigurationName(value);
    }
    const handleClickAddConfiguration = () => {
        if(configurationName.replaceAll(' ', '') === '') return;
        if(configurations.includes(configurationName)) return;
        setConfigurations((configurations) => [...configurations , configurationName]);
        setConfigurationName('');
        configurationInput.current.focus();
    }
    const handleClickDeleteConfiguration = (index: number) => {
        setConfigurations((configurations) => configurations.filter((item, i) => i !== index));
    }
    const handleChangeCategory = (value:string) =>{
        setCategory(value);
    } 
    const handleAddCategory = () => {
        if(category.replaceAll(' ', '') === '') return;
        setCategories((categories) => 
        [...categories, 
            {
            name :category,
            configurations: configurations
            }
        ]);
        setCategory('');
    }
    const handleDeleteCategory = (index:number) => {
        setCategories((categories) => categories.filter((item, i) => i !== index));
    }
    return (
        <div className='h-screen p-5'>
            <div className='container'>
                <input 
                className='rounded-3xl border-2 border-sky-500 p-2 mr-3' 
                placeholder='Nhập tên danh mục' 
                type="text"   
                value={category}
                ref={CategoryInput}
                onChange={(e) => handleChangeCategory(e.target.value)}
                />
                <br />
                {/* <label className='mt-3 p-2 font-bold'>Thông tin cấu hình</label> */}
                <table className='table-fixed  mt-3'>
                    <caption className='p-2 bg-slate-500 font-bold text-white'>Thông tin cấu hình</caption>
                    <thead className='font-bold bg-slate-300'>
                        {/* <tr>
                            <td className='mb-3 text-center'>Tên</td>
                            <td className='mb-3 p-2'>Chức năng</td>
                        </tr> */}
                    </thead>
                    <tbody className='text-center'>
                    {configurations.map((item,index) => {
                        return (
                        <tr key={index} className={index % 2 === 0 ? 'bg-slate-100' : 'bg-slate-200'}>
                            <td className='p-3'>
                                <label className='p-1 mt-3'>{item}</label> 
                            </td>
                            <td >
                                <button 
                                className='rounded-bl-full bg-sky-500 p-2 text-white font-bold hover:bg-sky-600'
                                onClick={() => handleClickDeleteConfiguration(index)}
                                >X</button>
                            </td>
                        </tr>
                        )
                    })}
                    </tbody>
                </table>
                <input className='rounded-s-3xl border-2 border-sky-500 p-2 mt-3' 
                    type="text" 
                    value={configurationName} 
                    placeholder='tên cấu hình'
                    ref={configurationInput}
                    onChange={(e) => handleInputConfigurationName(e.target.value)}/>
                <button className='rounded-e-3xl bg-sky-500 p-2 border-2 border-sky-500 text-white font-bold hover:bg-sky-600 mt-3'
                onClick={handleClickAddConfiguration}
                >+</button>
                <br />
                <button 
                className='rounded-3xl bg-sky-500 p-2 text-white font-bold hover:bg-sky-600 mt-3'
                onClick={handleAddCategory}
                >
                    Thêm loại
                </button>

                <table className='table-fixed mt-3'>
                    <caption className="caption-top font-bold bg-slate-400 p-2">
                        Bảng tên danh mục sản phẩm
                    </caption>
                    <thead className='font-bold p-2 bg-slate-300'>
                        <tr>
                            <th className='p-2 border-r-2'>Tên loại</th>
                            <th className='p-2'>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((item,index) => {
                            return (
                            <tr key={index} className={index % 2 === 0 ? 'bg-slate-100' : 'bg-slate-200'}>
                                <td className='p-3'>
                                    <label className='p-1 mt-3'>{item.name}</label> 
                                </td>
                                <td className='flex items-end justify-end'>
                                    <button 
                                    className='rounded-bl-full bg-sky-500 p-2 text-white font-bold hover:bg-sky-600'
                                    onClick={() => handleDeleteCategory(index)}
                                    >X</button>
                                </td>
                            </tr>
                            )
                        })}
                        {/* <tr>
                        <td>Loại 1</td>
                        <td><button className='bg-green-600 hover:bg-green-500 rounded-2xl p-2 text-white'>Sửa</button> <button className='bg-red-600 hover:bg-red-500 rounded-2xl p-2 text-white'>Xóa</button></td>
                        </tr> */}
                    </tbody>
                </table>
                
            </div>
        </div>
    );
}

export default Page;
