import React from 'react';
import styles from '@/styles/HomePage/CategoryList.module.scss';
import { Categories } from '../../Data';
import Link from 'next/link';


const CategoryList = () => {

    return (<aside className={styles.categoryList}>

        {Categories?.map(item => (
            <div key={item.CategoryName} className={styles.category}>
                <i className="bi bi-tags-fill"></i>
                <div className={styles.mainCategory}>
                    <Link
                        href="/kategori/[...slug]" as={`/kategori/${item.CategoryName}/${item.CategoryId}`}
                    >
                        <h3>{item.CategoryName}

                        </h3>
                    </Link>
                </div>

            </div>
        ))
        }
    </aside >)
}
export default CategoryList;