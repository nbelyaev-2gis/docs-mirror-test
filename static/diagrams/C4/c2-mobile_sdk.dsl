workspace {
    
    !identifiers hierarchical
    
    model {
    
        softwareSystem = softwareSystem "On-Premise"{
        
        map = container "Maps" "Enables displaying maps in web applications, websites, and mobile applications"
        search = container "Search" "Enables obtaining information on various objects"
        navi = container "Navigation" "Enables building routes and getting route information"
        mobilesdk = container "Mobile SDK" "Enables building Android/iOS mobile applications" "" "focus"
        
        mobilesdk -> map "Displays map using"
        mobilesdk -> search "Handles search queries using"
        mobilesdk -> navi "Builds routes using"
            
            
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