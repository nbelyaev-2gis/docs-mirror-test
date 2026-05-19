workspace {
    
    !identifiers hierarchical
    
    model {
    
        softwareSystem = softwareSystem "On-Premise"{
        
        citylens = container "CityLens" "Captures images through a mobile app and processes them using AI" "" "focus"
        pro = container "Pro" "Enables analyzing geodata for business"
        map = container "Maps" "Enables displaying maps in web applications, websites, and mobile applications"
        search = container "Search" "Enables obtaining information on various objects"
        navi = container "Navigation" "Enables building routes and getting route information"
        
        citylens -> pro "Sends captured data to"
        citylens -> map "Displays map using"
        citylens -> search "Gets information on map objects using"
        citylens -> navi "Builds routes using"
            
        }

    }
    
    views {
    
        container softwareSystem "All" {
            include element.type==container
            autolayout lr
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