const formAction = async (formData: FormData) => {
    'use server';
    // 項目の値を個別に取得
    console.log(formData.get('title'));
    console.log(formData.get('price'));

    // 項目の値をまとめて取得
    const rawFormData = Object.fromEntries(formData.entries());
    const {title, price} = rawFormData;
    console.log(title);
    console.log(price);
};

export default function FormDataSample() {
    return (
        <div>
            <h2>form-data-sample</h2>
            <form action={formAction}>
                <input name="title" placeholder="title"/>
                <input name="price" placeholder="price"/>
                <button>送信</button>
            </form>
        </div>
    );
}
