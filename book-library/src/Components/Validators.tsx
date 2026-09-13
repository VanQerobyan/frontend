export const TitleValidator = {
    required:"Please fill in the name of the title"
}


export const AuthorValidator = {
    required: "Please fill in the name of the author of the book"
}

export const  YearValidator = {
    required: "Please enter the book`s publication year",
    setValueAs: ((year:string) => Number(year))
}

export const GenreValidator = {
    required: "Please enter the book`s genre"
}

export const ImageValidator = {
    required: "Please enter the image URL or image name"
}