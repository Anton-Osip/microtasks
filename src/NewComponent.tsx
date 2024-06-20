type NewComponentProps = {
    topCars: CarsType[]
}

type CarsType = { manufacturer: string, model: string }

export const NewComponent = (props: NewComponentProps) => {
    return (
        <table>
            <thead>
            <tr>
                <th>manufacturer</th>
                <th>model</th>
            </tr>
            </thead>
            <tbody>
            {props.topCars.map((car, index) => {
                return (
                    <tr key = {index}>
                        <td>{car.manufacturer}</td>
                        <td>{car.model}</td>
                    </tr>)
            })}
            </tbody>
        </table>
    )
}


// type NewComponentProps = {
//     // students: Array<StudentType>
//     students: StudentType[]
// }
//
// type StudentType = { id: number, name: string, age: number }
// export const NewComponent = (props: NewComponentProps) => {
//     return (
//         <ul>
//             {props.students.map(student => {
//                 return (
//                     <li key = {student.id}>
//                         <span>Name:{student.name} </span>
//                         <span> Age:{student.age}</span>
//                     </li>)
//             })}
//
//         </ul>
//     )
// }