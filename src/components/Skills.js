import styled from 'styled-components';

const Divider = styled.div`
    width: 85%;
    padding-bottom: 1px;
    background: #383d47;
    margin: 0 auto;
`

const Skills = ({skills}) => {
    const rows = []
    let lastType = null

    skills.forEach((item, index) => {
        if (item.type !== lastType) {
            lastType = item.type
            rows.push(<Divider key={item.type} />)
        }
        rows.push(<p key={index}>{item.label}</p>)
    })

    return(
        <>
            {rows}
        </>
    )
}

export default Skills