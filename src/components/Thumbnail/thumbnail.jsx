export default function Thumbnail({ title, cover}) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
            <img src={cover} alt="freelance" height={80} width={80} />
            <span>{title}</span>
        </div>
    )
}