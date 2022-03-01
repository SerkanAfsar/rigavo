import getSlug from 'speakingurl';
import { Categories } from 'Data';

export const friendlyUrl = (title) => {
    return getSlug(title, { lang: "tr" });
}

export const CategoryNameList = (catList) => {

    return catList?.map((item) => {
        const name = item.CategoryName;


        const newArr = item?.SubCategories?.map(val => {
            return val?.SubCategories ? name + " " + CategoryNameList(val.SubCategories).toString() : name + " " + val.CategoryName;

        });

        return newArr ? [name, ...newArr] : [name];
    })

    // return {
    //     params: {
    //         slug: [`${getSlug(value.CategoryName)}`, `${value.CategoryId}`]
    //     }
    // }
}