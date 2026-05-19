workspace {
    
    !identifiers hierarchical
    
    model {
    
        softwareSystem = softwareSystem "On-Premise"{
        
        gefest = container "Platform Manager" "Creates playgrounds to test APIs in local network" "" "focus"
        
        map = container "Maps" "Enables displaying maps in web applications, websites, and mobile applications" "MapGL JS API"
        search = container "Search" "Enables obtaining information on various objects" "Catalog APIs"
        navi = container "Navigation" "Enables building routes and getting route information" "Directions API"
        styles = container "Styles API" "Enables importing custom map styles" "Styles API"
        
        gefest -> map "Creates an interactive map playground using"
        gefest -> search "Creates a search playground using"
        gefest -> navi "Creates a routing playground using"
        gefest -> styles "Imports map style archive using"
            
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