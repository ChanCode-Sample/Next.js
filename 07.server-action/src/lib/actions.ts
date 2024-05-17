'use server';

export async function plusData(previousState: number, formData: FormData) {
    console.log(previousState);
    return previousState + 1;
}

