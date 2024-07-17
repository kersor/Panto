export interface IChooseContainer{
    id: number,
    title: string,
    description: string
    link: string
}

export interface ISlickItems {
    id: number,
    image:  string,
    type: string,
    name:  string,
    star: number,
    cash: number
}

export interface IDashboardText {
    type: string,
    title: string,
    description: string,
    customLink: {
        text: string,
        link: string
    }
}

export interface IReviews {
    id: number,
    avatar: string,
    name: string,
    aktivitas: string,
    comment: string,
    star: number,
    photo: string
}