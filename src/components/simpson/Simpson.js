export default function Simpson({name,surname,age,info,photo}){

    return(
<div className={"simpson"}>
    <h2>{name} {surname}, age is {age} years</h2>
    <p>{info}</p>
    <img src={photo} alt=""/>
    <hr/>
</div>
    );
}