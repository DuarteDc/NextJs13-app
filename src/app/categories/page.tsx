// "use client"
import { use } from 'react';
 
import { useAppDispatch, useAppSelector } from '@/infraestructure/store/hooks'
import { categoryService } from '@/domain/services/categoty.service'
import { CategoriesData } from '@/domain/models/category/interfaces/categories-data.interface';
import { ArrowRight } from '@/infraestructure/components/ui/icons';
import { store, wrapper } from '@/infraestructure/store/store';
import { getCategories } from '@/infraestructure/repositories/category.repository';
import { GetServerSidePropsContext, PreviewData } from 'next';
import { ParsedUrlQuery } from 'querystring';

export default async function generateStaticParams() { 

    const categories = useAppSelector(state => state.categoryReducer.categories) as CategoriesData;

    return (
        <main>
            <h1>Explore by category</h1>
            <section className="grid grid-cols-4 gap-10">
                {
                    categories.categories.map(({ id, name, slug, }) => (
                        <div className="shadow-lg bg-slate-600 rounded-md px-5 py-10 relative" key={id}>
                            <h3 className="text-6xl my-5 font-bold">{name}</h3>
                            <p className="text-sm my-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur error ipsam soluta animi nihil recusandae praesentium cum deserunt voluptate facere.</p>
                            <span className="absolute right-5 bottom-5">
                                <ArrowRight />
                            </span>
                        </div>
                    ))
                }
            </section>
        </main>
    )
}

// const get = wrapper.getServerSideProps(store => (): any => {
//     return store.dispatch(getCategories())
// })

// export default generateStaticParams()