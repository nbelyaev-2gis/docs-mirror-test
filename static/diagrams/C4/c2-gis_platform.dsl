workspace {
    
    !identifiers hierarchical
    
    model {
    
        softwareSystem = softwareSystem "On-Premise"{
        
        map = container "Maps" "Enables displaying maps in web applications, websites, and mobile applications"
        search = container "Search" "Enables obtaining information on various objects"
        navi = container "Navigation" "Enables building routes and getting route information"
        platform = container "GIS Platform" "Web-based GIS solution for performing geoanalytical tasks" "" "focus"
        
        platform -> map "Gets Basemap using"
        platform -> search "Handles search queries using"
        platform -> navi "Analyzes accessible areas using"
            
            
        }
        
        public = softwareSystem "Internet" {
            
            servers = container "Public update servers" "Public servers to get and update traffic and other data" "" "external"
        }
        
        softwareSystem.platform -> public.servers "Gets traffic data from"

    
    }
    
    views {
    
        container softwareSystem "All" {
            include element.type==container
            autolayout lr 500 100
        }
        
        
        
        styles {
            element "Element" {
                background #1168bd
                color #ffffff
                opacity 60
            }
            element "storage" {
                shape cylinder
                background #dddddd
                color #000000
            }
            element "external" {
                background green
            }
            element "focus" {
                opacity 100
            }
        }
    }

}