export default function Dynamic(props: { params: { id: string } }) {
    return (
        <div>dynamic{props.params.id}</div>
    )
}
