class GalleryObject{
    constructor(pageLink, thumbnailLink, type, language, altString, titleString, id){
        this.pageLink = pageLink;
        this.type = type;
        this.thumbnailLink = thumbnailLink;
        this.language = language;
        this.id = id;
        this.altString = altString;
        this.titleString = titleString;
    }

    getLanguage(){
        return this.language;
    }

    getType(){
        return this.type;
    }

    showProject(){
        let iframeContainer = document.createElement('div');
        iframeContainer.id = 'iframeProject';
        iframeContainer.className = 'iframeContainerClass fixed-top';
        iframeContainer.onclick = this.handleCloseProject;


        let iframeNode = document.createElement('iframe');
        iframeNode.src = this.pageLink;
        iframeNode.width = window.innerWidth - window.innerWidth / 7;
        iframeNode.height = window.innerHeight - window.innerHeight / 10;
        iframeContainer.appendChild(iframeNode);

        let iframeAlternative = document.createElement('p');
        iframeAlternative.textContent = 'I am sorry, your browser does not support iframes at the moment. However you can also paste the following link to your browsers adress bar to look at the project: ' + this.pageLink;
        iframeNode.appendChild(iframeAlternative);

        document.getElementsByTagName('body')[0].appendChild(iframeContainer);

        window.addEventListener('keydown', (event) => this.handleCloseProject(event), {once:true});

    }

    handleCloseProject(event){
        if(event.key === 'Escape' || event.type === 'click'){
            document.getElementsByTagName('body')[0].removeChild(document.getElementById('iframeProject'));
        }   
    }

    getGalleryItemNode(){
        let node = document.createElement('div');
        node.id = 'galleryDiv' + this.id;
        node.className = 'galleryThumbnail col-lg-2 col-md-4 col-sm-6';
        node.onclick = this.showProject.bind(this);
        
        let nodePageLinkImage = document.createElement('img');
        nodePageLinkImage.id = 'galleryImage' + this.id;
        nodePageLinkImage.src = this.thumbnailLink;
        nodePageLinkImage.alt = this.altString;
        nodePageLinkImage.title = this.titleString;
        node.appendChild(nodePageLinkImage);

        return node;
    }

}