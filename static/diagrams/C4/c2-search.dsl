# Диаграмма всех контейнеров (продуктов) без подписей стрелок, с описаниями блоков

workspace {
    
    !identifiers hierarchical
    
    model {
    
        softwareSystem = softwareSystem "On-Premise"{

        license = container "License service" "Provides access to On-Premise services"
        search = container "Search" "Enables obtaining information on various objects" "" "focus"
        platform = container "GIS Platform" "Web-based GIS solution for performing geoanalytical tasks"
        pro = container "Pro" "Enables analyzing geodata for business"
        keys = container "API Keys service" "Enables managing API keys"
        gefest = container "Platform Manager" "Provides API playgrounds in local network"
        mobilesdk = container "Mobile SDK" "Provides tools for building Android/iOS mobile applications"
        
        search -> license "Checks license status using"
        search -> keys "Sends request metadata to"
        
        platform -> search "Handles search queries using"
        
        pro -> search "Handles search queries using"
        gefest -> search "Creates a search playground using"
        mobilesdk -> search "Implements a search engine using"
            
            
        }

    
    }
    
    views {
    
        container softwareSystem "All" {
            include element.type==container
            autolayout lr 300 200
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