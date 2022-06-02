export interface IProject {
    name: string,
    date: string,
    color: string,
    tag: string,
    sDescription: string,
    lDescription: string,
    link: Link,
    image: string,
    weight: number
} 

type Link = {
    url: string,
    text: string
}