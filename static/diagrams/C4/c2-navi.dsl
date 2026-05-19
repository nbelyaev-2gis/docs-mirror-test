workspace {
    
    !identifiers hierarchical
    
    model {
    
        softwareSystem = softwareSystem "On-Premise"{
        
        navi = container "Navigation" "Enables building routes and getting route information" "" "focus"
        platform = container "GIS Platform" "Web-based GIS solution for performing geoanalytical tasks"
        pro = container "Pro" "Enables analyzing geodata for business"
        mobilesdk = container "Mobile SDK" "Provides tools for building Android/iOS mobile applications"
        keys = container "API Keys service" "Enables managing API keys"
        license = container "License service" "Provides access to On-Premise services"
        gefest = container "Platform Manager" "Provides API playgrounds in local network"
        
        platform -> navi "Analyzes accessible areas using"
        
        navi -> keys "Sends request metadata to"
        navi -> license "Checks license status using"
        
        pro -> navi "Analyzes accessible areas using"
        gefest -> navi "Creates a routing playground using"
        mobilesdk -> navi "Enables routing using"
            
            
        }
        
        public = softwareSystem "Internet" {
            
            servers = container "Public update servers" "Public servers to get and update traffic and other data" "" "external"
        }
        
        softwareSystem.navi -> public.servers "Gets traffic data from"

    
    }
    
    views {
    
        container softwareSystem "All" {
            include element.type==container
            autolayout lr 400 200
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