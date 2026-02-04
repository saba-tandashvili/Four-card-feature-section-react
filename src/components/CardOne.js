import iconSupervisor from '../icon-supervisor.svg';
function CardOne() {
    return <div className ="card" id="supervisor">
        <h2>Supervisor</h2>
        <p>Monitors activity to identify project roadblocks</p>
        <figure>
            <img src = {iconSupervisor} alt = "icon-supervisor" className ="supervisor-img"/>
            </figure>
    </div>
}

export default CardOne;