import navbar from "./navbar.js"

document.getElementById("navbar").innerHTML=navbar();






let i = 0;
let featuresFun = () => {

    i++;

    if (i % 2 !== 0) {
    


        document.querySelector("#drop_down3").innerHTML =
        `  <div id="features_drop1">
        <p class="fetures_subhead">- key features</p>
        <div id="features_card">
            <a href="" class="features_a">
                <div class="features_card1">
                    <div class="fetures_head">
                        
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"  style="--icon-color:#f8ca65;"><rect x="3.5" y="3.5" width="14" height="14" rx="1.375" stroke="#000"></rect><path stroke="#000" stroke-linecap="round" style="--icon-color:#f8ca65;" d="M7.183 14.687V11M10.936 14.687V8.188M14.69 14.687V6.312"></path></svg>
                        
                        <h4>Dashboard</h4>
                    </div>
                    <p>Simply decision-making with real-time insights</p>
                </div>
            </a>
            <a href="" class="features_a">
                <div class="features_card1">
                    <div class="fetures_head">
                       
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="jsx-1475715785 menu-item-title-icon outline" style="--icon-color:#6C6CFF;"><rect x="5.183" y="6.287" width="12.047" height="10.951" rx="2.259" stroke="#000"></rect><path stroke="#000" stroke-linecap="round" d="M8.974 10.072v2.285M13.35 10.072v2.285"></path><path d="M3 10.701c0-.624.506-1.13 1.13-1.13h1.06v4.381H4.13A1.13 1.13 0 0 1 3 12.823v-2.122zM17.234 9.572h1.061c.624 0 1.13.505 1.13 1.13v2.121a1.13 1.13 0 0 1-1.13 1.13h-1.06V9.571z" stroke="#000" stroke-linecap="round" stroke-linejoin="round"></path><path stroke="#000" stroke-linecap="round" d="M11.162 3.5v2.285"></path></svg>
                        <h4>Automations</h4>
                    </div>
                    <p>Save time and leave repetitive works behind</p>
                </div>
            </a>
            <a href="" class="features_a">
                <div class="features_card1">
                    <div class="fetures_head">
                        
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="jsx-1475715785 menu-item-title-icon outline" style="--icon-color:#6C6CFF;"><path d="M4 3.5h4.5V14a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5zM13.5 3.5H18a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V3.5z" stroke="#000" stroke-linejoin="round"></path><rect x="8.5" y="3.5" width="5" height="15" rx=".5" stroke="#000" stroke-linejoin="round"></rect></svg>
                        <h4>Kanban</h4>
                    </div>
                    <p>Prioritize tasks and balance demands according to capacity</p>
                </div>
            </a>
            <a href="" class="features_a">
                <div class="features_card1">
                    <div class="fetures_head">
                       
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="jsx-1475715785 menu-item-title-icon outline" style="--icon-color:#6C6CFF;"><rect x="6.833" y="3.5" width="10.667" height="11.833" rx=".667" stroke="#000"></rect><path stroke="#000" stroke-linecap="round" d="M15.167 7h-6M15.167 10.5h-6"></path><path d="M4 7.667v10.266c0 .129.104.233.233.233h7.934" stroke="#000" stroke-miterlimit="1.414" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <h4>Files</h4>
                    </div>
                    <p>Add context to your tasks by uploading any file type</p>
                </div>
            </a>
            <a href="" class="features_a">
                <div class="features_card1">
                    <div class="fetures_head">
                       
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="jsx-1475715785 menu-item-title-icon outline" style="--icon-color:#6C6CFF;"><path stroke="#000" stroke-linecap="round" d="M3.5 8.735l3.036 3.036M7.738 4.5l3.036 3.036M14.393 14.981l2.753 2.754"></path><path d="M5.745 12.735l6.78-6.78 3.67 3.671c.89.89.89 2.333 0 3.223l-3.556 3.556a2.28 2.28 0 0 1-3.223 0l-3.67-3.67z" stroke="#000"></path><path d="M4.031 14.342l9.5-9.328" stroke="#000" stroke-linecap="round"></path></svg>
                        <h4>Integration</h4>
                    </div>
                    <p>keep your business tools all in one place</p>
                </div>
            </a>
            <a href="" class="features_a">
                <div class="features_card1">
                    <div class="fetures_head">
                         <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="jsx-1475715785 menu-item-title-icon outline" style="--icon-color:#6C6CFF;"><path d="M9 6H2M14 11H6M19.242 16H12" stroke="#000" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <h4>Gantt</h4>
                    </div>
                    <p>Visualize project milestones and dependencies</p>
                </div>
            </a>
            <a href="" class="features_a">
                <div class="features_card1">
                    <div class="fetures_head">
                        
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="jsx-1475715785 menu-item-title-icon outline" style="--icon-color:#6C6CFF;"><path d="M5 17.273V4a1 1 0 0 1 1-1h6.728a1 1 0 0 1 .753.342l3.272 3.74A1 1 0 0 1 17 7.74v9.533a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" stroke="#000"></path><path d="M13.143 7.114V3.447c0-.157.194-.232.299-.115L16.742 7c.1.11.021.286-.127.286h-3.3a.171.171 0 0 1-.172-.172z" stroke="#000"></path><path d="M7.857 9.962h4.104M7.682 13.409h5.545" stroke="#000" stroke-linecap="round"></path></svg>
                        <h4>Docs</h4>
                    </div>
                    <p>Turn words into workflows and collaborate in real-time</p>
                </div>
            </a>

        </div>
    </div>`
    
}
else if (i % 2 !== 1) {
    console.log("hello world")

    document.querySelector("#drop_down3").innerHTML = null;
}

}
document.getElementById("features").addEventListener("click", featuresFun);