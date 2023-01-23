

//<----------------------------------------------------------------------------- PARTE DOS PROJETOS --------------------------------------------------------------------------->
const ContainerDash = document.querySelector('#LiDashbord');
const ContainerCred = document.querySelector('#LiCredit');
const ContainerYoutube = document.querySelector('#LiYoutube');
const ContainerSales = document.querySelector('#LiSales');
const ContainerArticle = document.querySelector('#LiABM');
function Selecao(elemento){
    //-----------------------------Dashbord--------------------------------------------
    if (elemento.classList.contains('Dashbord')){
        ContainerDash.innerHTML=`
            <div class="ProjectExplainer">
                <a class='DashbordExplainer'>
                    <h1>Quality Dashbord</h1>
                    <p>The construction of this automated dashbord was intended to follow the quality of a certain product, taking its variables, processing the data and bringing the results in the form of a graph.</p>
                </a>
            </div>
        `
    };
    if(elemento.classList.contains('DashbordExplainer')){
        ContainerDash.innerHTML=`
            <img src="assets/Images/DashbordExcel.png" alt="" class="Dashbord">
        `  
    };
    //------------------------------CreditCard---------------------------------------------
    if(elemento.classList.contains('CredtCard')){
        ContainerCred.innerHTML=`
        <div class="ProjectExplainer">
            <a class='CreditExplainer' href="https://explorer-lab-01-eta.vercel.app/" target="_blank">
                <h1>Interactive Card</h1>
                <p>The construction of this interactive card was carried out at the Rocketseat event, in which we used the following technologies for its creation: Figma, HTML, CSS, JavaScript, Git and Github.</p>
            </a>
        </div>
        `
    };
    if (elemento.classList.contains('CreditExplainer')){
        ContainerCred.innerHTML=`
            <img src="assets/Images/CreditCard.png" alt="Credit Card Project" class="CredtCard">
        `  
    };
    //--------------------------------Youtube Channel---------------------------------------------
    if(elemento.classList.contains('MetalurgyInVideo')){
        ContainerYoutube.innerHTML=`
        <div class="ProjectExplainer">
            <a class='ChannelExplainer' href="https://www.youtube.com/@metallurgyinvideos1407" target="_blank">
                <h1>Youtube Channel</h1>
                <p>Channel created in partnership with Prof. Cláudio Batista, in order to help the students of the "steel industry 1" class.</p>
            </a>
        </div>
        `
    };
    if (elemento.classList.contains('ChannelExplainer')){
        ContainerYoutube.innerHTML=`
        <img src="assets/Images/MetalurgyInVideoC.png" alt="" class="MetalurgyInVideo">
        `  
    };
     //--------------------------------Sales Control---------------------------------------------
     if(elemento.classList.contains('ControleVendas')){
        ContainerSales.innerHTML=`
        <div class="ProjectExplainer">
            <a class='SalesExplainer'>
                <h1>Sales Control</h1>
                <p>Excel program created for sales control. This application was built using VBA/MACRO to optimize tasks and do the sales part. It is also used to monitor each customer's situation and organize payments. </p>
            </a>
        </div>
        `
    };
    if (elemento.classList.contains('SalesExplainer')){
        ContainerSales.innerHTML=`
        <img src="assets/Images/Controle_Vendas.png" alt="" class="ControleVendas">
        `  
    };
     //--------------------------------Artigo---------------------------------------------
     if(elemento.classList.contains('EMECR')){
        ContainerArticle.innerHTML=`
        <div class="ProjectExplainer">
            <a class='ABMExplainer' href="https://abmproceedings.com.br/en/article/biomass-torrefaction-for-use-as-fuel-in-ironmaking-processes" target="_blank">
                <h1>EMECR Article</h1>
                <p>Article published and presented at the Brazilian Association of Metallurgy (ABM), which is based on the use of processed biomass in the steel industry.</p>
            </a>
        </div>
        `
    };
    if (elemento.classList.contains('ABMExplainer')){
        ContainerArticle.innerHTML=`
        <img src="assets/Images/EMECR.png" alt="" class="ControleCliente">
        `  
    };
}
function AlterarFunction (){
    this.CapturaClick = ()=>{
        document.addEventListener('click',(event)=>{
            const elemento = event.target;
            Selecao(elemento);
        });
    };

    this.Iniciar= ()=>{
        this.CapturaClick();
    };
};

const Alterar = new AlterarFunction();
Alterar.Iniciar();

//<------------X---------------X-----------------X------------------X-----------------X---------------------X---------------------X------------------------X---------------->

//<----------------------------------------------------------------------------- PARTE DOS DEPOIMENTOS --------------------------------------------------------------------------->
function CreateTestimonial(image,name, work, company, data, text) {
    return `
    <div class="Person">
        <div class="PersonFile">
          <img src="assets/Images/${image}.png" alt="Figura do ${name}" />
          <h2>${work}</h2>
          <h3>${company}</h3>
          <h1>${name}</h1>
        </div>
        <div class="PersonText">
            <h2>${data}</h2>
            <p><span>"</span> 
                ${text}
            <span>"</span></p>
        </div>
    </div>
    `
  }
document.querySelector('#SpaceTestimonial').innerHTML+=`
  ${CreateTestimonial(
    5,
    'João Paulo',
    'Especialista LPM',
    'Gerdau Ouro Branco',
    '12/01/2023',
    'Matheus é jovem muito promissor, ele sempre está em busca de aprendizado. Se destaca não só pela sua persistência em busca de seu objetivo quanto por enfrentar sem medo quaisquer mudanças. É pessoa admirável !'
  )}
  ${CreateTestimonial(
    1,
    'Alex Campos',
    'Analista de P&D Sr.',
    'Tecnored',
    '12/01/2023',
    'Matheus é uma pessoa que busca os objetivos com determinação. Possui excelente formação acadêmica e excelência no manuseio de ferramentas computacionais. Esta sempre em busca de novos recursos para aprimoramento profissional. Além disso, reza sempre pelo bom relacionamento corporativo.'
  )}
  ${CreateTestimonial(
    2,
    'Cláudio Batista',
    'Professor Titular',
    'Universidade Federal de Ouro Preto',
    '12/01/2023',
    'Matheus é um jovem criativo, responsável, bem humorado, metódico, organizado, autodidata, estudioso, com mindset de crescimento,  resiliente e adepto da cultura maker. É um ser humano evoluído.'
  )}
  ${CreateTestimonial(
    1,
    'Welinton B.',
    'Operador 03 - PDC',
    'Gerdau Ouro Branco',
    '23/01/2023',
    'Matheus é um profissional que sabe o que quer, com foco ! Dedicado, esforçado, companheiro e smpre está disposto a aprender.Simples e dentro dessa simplicidade se mostrou um profissional capaz de realizar todas as tarefas com excelência e dedicação!!! O profissional de grupo!De fácil relacionamento, dinâmico,interessado no trabalho,crescendo e ajudando os outros a crescerem!!! .'
  )}
`
 