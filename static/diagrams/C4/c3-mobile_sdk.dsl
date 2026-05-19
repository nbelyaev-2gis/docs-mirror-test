workspace {
    
    !identifiers hierarchical
    
    model {
    
        softwareSystem = softwareSystem "On-Premise"{
    
        
        mobilesdk = container "Mobile SDK" {
            
                msdk = component "Mobile SDK" "Tools for building Android/iOS applications"
            }
        
        internet = container "Internet" {
            update = component "Public traffic update server" "Public servers to get and update traffic data" "" "external,nfocus"
        }
        
        traffic = container "Traffic Proxy service" {
            proxy = component "NGINX reverse proxy" "Provides internet access to public servers with traffic data" "" "nfocus"
        }
        
        maps = container "Maps service" {
            tilesapi = component "Tiles API" "Provides tiles to build maps from" "" "nfocus"
        }
        
        search = container "Search service" {
            catalogapi = component "Catalog APIs" "Provides RESTful APIs to use the search engine" "" "nfocus"
        }
        
        navi = container "Navigation service" {
            front = component "Navigation APIs" "Handles routing requests" "" "nfocus"
        }
        
        traffic.proxy -> internet.update "Gets traffic data from"
        mobilesdk.msdk -> traffic.proxy "Updates traffic data using"
        
        mobilesdk.msdk -> maps.tilesapi "Gets mobile tiles from"
        mobilesdk.msdk -> search.catalogapi "Handles search queries using"
        mobilesdk.msdk -> navi.front "Implements navigation using"
        
        }
    }
        

        
    
    views {
    
        component softwareSystem.mobilesdk "components" {
            include element.type==component
            autolayout lr 400 100
        }
        
        
       styles {
            element "Element" {
                background #1168bd
                color #ffffff
            }
            element "storage" {
                shape cylinder
                background #dddddd
                color #000000
            }
            element "external" {
                background green
                color white
                opacity 70
            }
            element "nfocus" {
                opacity 70
            }
        }
    }

}