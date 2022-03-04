import getSlug from 'speakingurl';
import { Categories } from 'Data';

export const friendlyUrl = (title) => {
    return getSlug(title, { lang: "tr" });
}

export const CategoryNameList = (catList) => {
    let name;
    return catList?.map((item) => {
        name = item.CategoryName;
        return {
            params: {
                slug: [`${getSlug(value.CategoryName)}`, `${value.CategoryId}`]
            }
        }
    })

}