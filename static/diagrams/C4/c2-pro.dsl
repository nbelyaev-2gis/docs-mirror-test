workspace {
    
    !identifiers hierarchical
    
    model {
    
        softwareSystem = softwareSystem "On-Premise"{
        
        map = container "Maps" "Enables displaying maps in web applications, websites, and mobile applications"
        search = container "Search" "Enables obtaining information on various objects"
        navi = container "Navigation" "Enables building routes and getting route information"
        citylens = container "CityLens" "Captures images through a mobile app and processes them using AI"
        pro = container "Pro" "Enables analyzing geodata for business" "" "focus"
        keys = container "API Keys service" "Enables managing API keys"
        license = container "License service" "Provides access to On-Premise services"
        
        citylens -> pro "Sends captured data to"
        
        pro -> license "Validates On-Premise license using"
        pro -> map "Displays map using"
        pro -> search "Handles search queries using"
        pro -> navi "Analyzes accessible areas using"
        pro -> keys "Sends request metadata to"
            
        }

    
    }
    
    views {
    
        container softwareSystem "All" {
            include element.type==container
            autolayout lr 400 100
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